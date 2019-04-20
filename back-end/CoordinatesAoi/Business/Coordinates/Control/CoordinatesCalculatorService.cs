using System;
using CoordinatesAoi.Business.Coordinates.Model;
using GeoAPI.Geometries;
using NetTopologySuite;

namespace CoordinatesAoi.Business.Coordinates.Control {
    public class CoordinatesCalculatorService {
        /// <summary>
        /// Calculates the distance between two coordinates
        /// </summary>
        /// <param name="coordinates">Coordinates configuration</param>
        /// <returns>The distance</returns>
        public double DistanceBetween(CoordinateDistance coordinates) {
            if (coordinates == null)
                throw new Exception("Coordinates configuration is required");

            var from = new Coordinate(coordinates.LatitudeFrom, coordinates.LongitudeFrom);
            var to = new Coordinate(coordinates.LatitudeTo, coordinates.LongitudeTo);
            var distance = from.Distance(to);

            return distance;
        }
    }
}