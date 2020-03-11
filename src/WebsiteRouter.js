import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import GivePage from "./page/GivePage";
import LocationPage from "./page/LocationPage";
import WatchPage from "./page/WatchPage";
import EventsPage from "./page/EventsPage";
import EventPage from "./page/EventPage";

class WebsiteRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/locations" component={LocationPage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/events/:year/:month/:date/:event" component={EventPage} />
        <Route exact path="/watch" component={WatchPage} />
        <Route exact path="/give" component={GivePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default WebsiteRouter;
