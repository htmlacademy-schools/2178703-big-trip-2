import { generateRoutePoint } from '../mock/route-point.js';

const ROUTE_POINTS_COUNT = 20;

export default class RoutePointsModel {
  routePoints = Array.from({length: ROUTE_POINTS_COUNT}).map((value, index) => generateRoutePoint (index + 1));

  getRoutePoints = () => this.routePoints;
}
