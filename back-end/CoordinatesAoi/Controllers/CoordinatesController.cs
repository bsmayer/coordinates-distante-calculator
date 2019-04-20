using System.Threading.Tasks;
using CoordinatesAoi.Business.Coordinates.Control;
using CoordinatesAoi.Business.Coordinates.Model;
using CoordinatesAoi.Util;
using Microsoft.AspNetCore.Mvc;

namespace CoordinatesAoi.Controllers {
    [Route("/coordinates")]
    [ApiController]
    public class CoordinatesController : Controller {
        private readonly CoordinatesManager coordinatesManager;

        public CoordinatesController(CoordinatesManager coordinatesManager) {
            this.coordinatesManager = coordinatesManager;
        }
        
        [HttpPost("distance/calculate")]
        public async Task<ApiResponse<double>> CalculateDistanceBetweenPoints([FromBody] CoordinateDistance coordinates) {
            return await ApiResponse<double>
                .AsyncResulfOf(Task.FromResult(this.coordinatesManager.CalculateDistanceBetweenCoordinates(coordinates)));
        }
    }
}