import React from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from './NavBarStyles.module.css';

const Header = ({ siteTitle }) => (
  <header>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">{siteTitle}</Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <div className={styles.links}>
            <Link to="/mytrips">My Trips</Link>
          </div>
          <div className={styles.links}>
            <Link to="/planatrip">Plan a Trip</Link>
        </div>
        </div>
      </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

