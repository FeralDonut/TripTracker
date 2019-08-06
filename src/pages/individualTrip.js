import React from "react"
import { connect } from 'react-redux'
import Layout from "../components/layout"
import SEO from "../components/seo"
import DashBoard from "../components/Dashboard/DashboardContainer"

const IndividualTrips = ({trip}) => {

  return  (
    <Layout>
      <SEO title="Trip" />
      <h1>{trip.title}</h1>
      <DashBoard individualTrip={trip}/>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    trip: state.individualTrip.trip
  }
} 

export default connect(mapStateToProps)(IndividualTrips)
