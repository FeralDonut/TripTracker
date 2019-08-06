import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeatherAPI from '../components/Weather/Weather'

const SecondPage = () => (
  <Layout>
    <SEO title="My Trips" />
    <WeatherAPI />
  </Layout>
)

export default SecondPage
