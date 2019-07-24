import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar/NavBar"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <NavBar siteTitle={data.site.siteMetadata.title} />
        <span className="layout">
          <main>{children}</main>
        </span>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
