import React from "react"
import { Link } from "gatsby"
// import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "../components/Dashboard/DashboardContainer";

import Layout from "../components/layout"
import SEO from "../components/seo"

import CreateTodo from '../components/CreateTodo/CreateTodoContainter'
import TodoList from '../components/TodoList/TodoListContainer'
import style from './styles.module.css'
// import { toggleDarkMode } from '../state/app';

const IndexPage = ({isDarkMode, dispatch}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      className={style.container}
      id="MyApp"
    >
      <Dashboard />
      {/* <div className={style.tasks}>
        <CreateTodo />
        <TodoList />
      </div> */}
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
    {/* </div> */}
  </Layout>
)

export default IndexPage;
// Connect the page to the store
// export default connect(state => ({
//   isDarkMode: state.app.isDarkMode
// }), null)(IndexPage)

