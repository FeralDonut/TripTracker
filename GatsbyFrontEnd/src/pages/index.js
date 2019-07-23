import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron } from 'reactstrap';
import style from './styles.module.css'
import user from '../utils/mockData';
import TripCard from '../components/Trips/TripCard';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      className={style.container}
      id="MyApp"
    >
      <Jumbotron>
        <h1>TripTracker</h1>
        <h4>Welcome {user.displayName}!</h4>
          <p>Use the navigation bar at the top of the page to get started.</p>
      </Jumbotron>
      <TripCard />
    </div>
  </Layout>
)

export default IndexPage;
// Connect the page to the store
// export default connect(state => ({
//   isDarkMode: state.app.isDarkMode
// }), null)(IndexPage)

