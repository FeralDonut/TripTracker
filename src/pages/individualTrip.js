import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "gatsby";
import { Jumbotron } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import DashBoard from "../components/Dashboard/DashboardContainer";
import Weather from "../components/Weather/Weather";
import style from "./styles.module.css";

const IndividualTrips = ({ trip }) => {
  const [render, setRender] = useState(true);
  const [indiTrip, setIndiTrip] = useState(trip);

  const apiCall = () => {
    setRender(!render);
  };

  useEffect(() => {
    if (indiTrip) {
      fetch(`http://24.4.98.147:8000/api/trips/${indiTrip._id}`)
        .then(res => res.json())
        .then(data => setIndiTrip(data));
    }
  }, [render]);

  return (
    <Layout>
      <SEO title="Trip" />
      {!indiTrip ? (
        <div>
          <h3>No trip selected</h3>
          <Link to="/">Please go back and select a trip</Link>
        </div>
      ) : (
        <div>
          <h1>{indiTrip.title}</h1>
          <h6>
            5 Day weather forecast for {indiTrip.location.city},{" "}
            {indiTrip.location.state} {indiTrip.location.country}
          </h6>
          <Weather zip={indiTrip.location.zip} />
          <DashBoard individualTrip={indiTrip} apiCall={apiCall} />
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
