import React, { Fragment } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Navbar/navbar';
import styles from './styles.css';
import Home from './LandingPages/home';
import MyTrips from './LandingPages/MyTrips';
import PlanTrip from './LandingPages/PlanTrip';

export default () => (
  <Router>
    <div >
      <NavBar className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">TripTracker</Link>
          </li>
          <li>
            <Link to="/mytrips">My Trips</Link>
          </li>
          <li>
            <Link to="/plantrip">Plan a Trip</Link>
          </li>
        </ul>
      </NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/plantrip" component={PlanTrip} />
        <Route path="/mytrips" component={MyTrips} />
      </div>
  </Router>
);