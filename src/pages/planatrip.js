import React from "react"
import { Link } from "gatsby"
import DashBoard from '../components/Dashboard/DashboardContainer';
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Plan A Trip" />
    <h1>Trip Title</h1>
    <DashBoard />
  </Layout>
)

export default SecondPage
