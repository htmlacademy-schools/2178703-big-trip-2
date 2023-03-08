import FiltersView from './view/filters-view.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import SiteMenuView from './view/site-menu-view.js';
import { render } from './render.js';
import RoutePointsModel from './model/route-point-model.js';
import { routePoints } from './mock/route-point.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new TripEventsPresenter(siteMainElement.querySelector('.trip-events'));

const routePointsModel = new RoutePointsModel(routePoints);

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

tripPresenter.init(routePointsModel);
