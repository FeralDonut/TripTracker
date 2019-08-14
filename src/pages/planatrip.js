import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NewTripForm from "../components/NewTrip/NewTripContainer";

const SecondPage = () => {
  const [reroute, setReroute] = useState(false);
  const newTripSaved = () => {
    setReroute(!reroute);
  };
  return (
    <Layout>
      <SEO title="Plan A Trip" />
      <h1>Plan Your Next Trip</h1>
      {reroute ? (
        <Link
          to="/individualTrip"
          style={{ textDecoration: "none", color: "black" }}
        >
          <button>Lets Add To Your Trip!</button>
        </Link>
      ) : (
        <NewTripForm newTripSaved={newTripSaved} />
      )}
    </Layout>
  );
};

export default SecondPage;
