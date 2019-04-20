using CoordinatesAoi.Business.Coordinates.Model;

namespace CoordinatesAoi.Business.Coordinates.Control {
    public class CoordinatesManager {
        private readonly CoordinatesCalculatorService calculatorService;

        public CoordinatesManager(CoordinatesCalculatorService calculatorService) {
            this.calculatorService = calculatorService;
        }

        public double CalculateDistanceBetweenCoordinates(CoordinateDistance distance) {
            return calculatorService.DistanceBetween(distance);
        }
    }
}