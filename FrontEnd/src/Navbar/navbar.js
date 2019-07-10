import React from 'react';
import style from './navBarStyles.css';
import Input from '../Inputs/Input'

const NavBar = props => {
  const {
    children,
    className,
  } = props;

    return (
    <nav>
      <ul>
        <div className={className}>
          {children}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;