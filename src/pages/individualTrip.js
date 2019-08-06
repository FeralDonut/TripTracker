import React from "react"
import { connect } from 'react-redux'
import { Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import DashBoard from "../components/Dashboard/DashboardContainer"

const IndividualTrips = ({trip}) => {

  return  (
    <Layout>
      <SEO title="Trip" />
      {!(trip) ? (
        <div>
          <h3>No trip selected</h3>
          <Link to="/">Please go back and select a trip</Link>
        </div>
      ) : (
      <div>
        <h1>{trip.title}</h1>
        <DashBoard individualTrip={trip}/>
      </div>
      )}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    trip: state.individualTrip.trip
  }
} 

export default connect(mapStateToProps)(IndividualTrips)
