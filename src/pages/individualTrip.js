import React from "react";
import { connect } from "react-redux";
import { Link } from "gatsby";
import { Jumbotron } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import DashBoard from "../components/Dashboard/DashboardContainer";
import Weather from "../components/Weather/Weather";
import style from "./styles.module.css";

const IndividualTrips = ({ trip }) => {
  return (
    <Layout>
      <SEO title="Trip" />
      {!trip ? (
        <div>
          <h3>No trip selected</h3>
          <Link to="/">Please go back and select a trip</Link>
        </div>
      ) : (
        <div>
          <h1>{trip.title}</h1>
          <h2>5 Day weather forecase for {trip.location.city}</h2>

          <Weather zip={trip.location.zip} />

          <DashBoard individualTrip={trip} />
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    trip: state.individualTrip.trip
  };
};

export default connect(mapStateToProps)(IndividualTrips);
