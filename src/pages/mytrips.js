import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TripList from "../components/Trips/TripList";

const SecondPage = () => (
  <Layout>
    <SEO title="My Trips" />
    {/* <TripList trips={trips} /> */}
  </Layout>
);

export default SecondPage;
