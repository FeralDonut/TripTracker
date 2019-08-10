import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NewTripForm from "../components/NewTrip/NewTripForm";

const SecondPage = () => (
  <Layout>
    <SEO title="Plan A Trip" />
    <h1>Plan Your Next Trip</h1>
    <NewTripForm />
  </Layout>
);

export default SecondPage;
