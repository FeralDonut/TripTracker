import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="My Trips" />
    <h3>Demo of a GET call to our back end</h3>
    <a href="http://24.4.98.147:8000/api/trips/5d38c0ea13132b226ebebf25" target="_blank">
      Click Me
    </a>
    
  </Layout>
)

export default SecondPage
