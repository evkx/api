﻿using evdb.Models;
using evdb.Services;
using evkx.models.Models.Search;
using evkxapi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace evdb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvController : ControllerBase
    {

        private IEv _evService;

        public EvController(IEv evService)
        {
            _evService = evService;
        }


        [HttpPost]
        public async Task<EvSearchResult> Search([FromBody] EvSearch search)
        {
            EvSearchResult result = await _evService.Search(search);

            return result;
        }

        [HttpGet("/api/searchoptions")]
        public async Task<EvSearchOptions> SearchOptions()
        {
            EvSearchOptions searchOptions = new EvSearchOptions();
            searchOptions.Brands = await _evService.GetBrands();
            searchOptions.BodyTypes = await _evService.GetBodyTypes();
            searchOptions.SeatConfiguration = await _evService.GetSeatConfiguration();
            searchOptions.Colors = await _evService.GetColors();
            return searchOptions;
        }

        [HttpGet("/api/ev/list")]
        public async Task<ActionResult<List<evkxapi.Models.EvSimpleExternal>>> ListEvs()
        {
            List<EV> evs = await _evService.GetAllEv();

            List<evkxapi.Models.EvSimpleExternal> evsSimple = new List<evkxapi.Models.EvSimpleExternal>();    

            foreach(EV ev in evs)
            {
                evsSimple.Add(new evkxapi.Models.EvSimpleExternal() { 
                    EvId = ev.Id.ToString(),
                     Brand = ev.Brand.Name,
                        Model = ev.ModelInfo.Name,
                    Variant = ev.ModelInfo.Variant
                });
            }
           
            return Ok(evsSimple);
        }


        [HttpGet("/api/ev/{id}/batteries/")]
        public async Task<ActionResult<List<BatteryExternal>>> GetBatteries(string id)
        {
            List<EV> evs = await _evService.GetAllEv();

            EV ev = evs.FirstOrDefault(e => e.Id.ToString().Contains(id));
            if(ev == null)
            {
                return NotFound();
            }

            return Ok(GetBatteryExternal(ev));
          }



        [HttpGet("/api/cc")]
        public ActionResult ClearCache()
        {
           _evService.ClearCache();

            return Ok();
        }

        private List<BatteryExternal> GetBatteryExternal(EV ev)
        {
            List<BatteryExternal> batteryList = new List<BatteryExternal>();    
            foreach(Battery battery in ev.Drivetrain.Battery)
            {
                batteryList.Add(GetBatteryExternal(battery));
            }

            return batteryList;
        }

        private BatteryExternal GetBatteryExternal(Battery battery)
        {
            BatteryExternal batteryExternal = new BatteryExternal();
            batteryExternal.GrossCapacity = battery.GrossCapacitykWh;
            batteryExternal.NetCapacity = battery.NetCapacitykWh;
            battery.CalculateChargeTime();
            batteryExternal.OptimalChargeCurve = MapChargeCurve(battery.GetFullChargeCurve());
            return batteryExternal; ;
        }

        private List<ChargeSpeedExternal> MapChargeCurve(List<ChargeSpeed> fullCurve)
        {
            List<ChargeSpeedExternal> chargeSpeedExternals = new List<ChargeSpeedExternal>();   

            foreach(ChargeSpeed chargeSpeed in fullCurve)
            {
                ChargeSpeedExternal chargeSpeedExternal = new ChargeSpeedExternal();    

                chargeSpeedExternal.SOC = chargeSpeed.SOC;
                chargeSpeedExternal.SpeedKw = chargeSpeed.SpeedKw;
                chargeSpeedExternal.EnergyCharged = chargeSpeed.EnergyCharged;
                chargeSpeedExternal.ChargeTime = Decimal.Round(chargeSpeed.ChargeTime,0);
                chargeSpeedExternal.ChargeTimeFromZero = Decimal.Round(chargeSpeed.ChargeTimeFromZero,0);
                chargeSpeedExternals.Add(chargeSpeedExternal);
            }

            return chargeSpeedExternals;
        }
    }
}
