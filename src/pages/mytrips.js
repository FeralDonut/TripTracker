import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Jumbotron } from "reactstrap";
import style from "./styles.module.css";
import user from "../utils/mockData";
import TripList from "../components/Trips/TripListContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faUserAstronaut);

const SecondPage = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(`http://24.4.98.147:8000/api/trips/`)
      .then(res => res.json())
      .then(data => setTrips(data));
  }, []);

  console.log(trips);

  return (
    <Layout>
      <SEO title="TripTracker" keywords={[`gatsby`, `application`, `react`]} />
      <div className={style.container} id="MyApp">
        <Jumbotron className={style.jumbo_container}>
          <h2>Here are all your saved trips!</h2>
        </Jumbotron>
        <TripList trips={trips} />
      </div>
    </Layout>
  );
};

export default SecondPage;