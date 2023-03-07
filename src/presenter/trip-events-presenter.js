import EventsView from '../view/trip-events-view.js';
import RoutePointView from '../view/route-point-view.js';
import EditingFormView from '../view/editing-form-view.js';
import SortingView from '../view/sorting-view.js';
import { render } from '../render.js';

export default class TripEventsPresenter {
  constructor(tripContainer) {
    this.eventsList = new EventsView();
    this.tripContainer = tripContainer;
  }

  init(routePointsModel) {
    this.routePointsModel = routePointsModel;
    this.boardRoutePoints = [...this.routePointsModel.getRoutePoints()];

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditingFormView(this.boardRoutePoints[0]), this.eventsList.getElement());

    for (let i = 0; i < this.boardRoutePoints.length; i++){
      render(new RoutePointView(this.boardRoutePoints[i]), this.eventsList.getElement());
    }
  }
}
