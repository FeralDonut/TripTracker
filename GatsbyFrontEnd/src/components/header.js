// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header



import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import logo from '../images/logo.jpg'

const NavLink = props => <Link getProps={isActive} {...props} />

const isActive = ({ isCurrent }) => {
  return {
    className: isCurrent ? 'active' : 'navlink'
  }
}

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `#072044`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >

        {/* Title/Logo */}
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img 
            src={logo} 
            alt="OneStepLogo" 
            style={{ 
              borderRadius: '100%',
              border: '6px solid #8EC8BF',
              margin: '0 5px',
              width: '50px' 
            }}/> */}
          <h1 style={{ margin: 0 }}>
            <NavLink to="/">TripTracker</NavLink>
          </h1>
        </span>
        <NavLink to="/page-2">My Trips</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </div>
    </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
