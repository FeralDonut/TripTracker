import React from "react"
import { Link } from "gatsby"
import DashBoard from '../components/Dashboard/DashboardContainer';
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <DashBoard />
  </Layout>
)

export default SecondPage
