import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Jumbotron } from "reactstrap";
import style from "./styles.module.css";
import user from "../utils/mockData";
import TripList from "../components/Trips/TripList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faUserAstronaut);

const IndexPage = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(`http://24.4.98.147:8000/api/trips/`)
      .then(res => res.json())
      .then(data => setTrips(data));
  }, []);

  return (
    <Layout>
      <SEO title="TripTracker" keywords={[`gatsby`, `application`, `react`]} />
      <div className={style.container} id="MyApp">
        <Jumbotron className={style.jumbo_container}>
          <div className={style.welcome_container}>
            <div className={style.greeting}>
              <h1>TripTracker</h1>
              <h4 className="welcome">Welcome {user.displayName}!</h4>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faUserAstronaut}
                size="7x"
                className={style.icon}
              />
            </div>
          </div>
          <p>Use the navigation bar at the top of the page to get started.</p>
        </Jumbotron>
        <TripList trips={trips} />
      </div>
    </Layout>
  );
};

export default IndexPage;
// Connect the page to the store
// export default connect(state => ({
//   isDarkMode: state.app.isDarkMode
// }), null)(IndexPage)
