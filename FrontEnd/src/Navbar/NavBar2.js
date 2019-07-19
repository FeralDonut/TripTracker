import React, {useState, useContext} from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './NavBar.css';
// import UserAvatar from '../../components/UserAvatar/UserAvatar';

function AuthNavItem(props) {
  const {
    actions: {setActiveTab},
  } = useContext(StoreContext);

  const dropDownSelector = value => setActiveTab(value);

  const {isAuthenticated, user, authButtonMethod} = props;
  const {displayName, email} = user;

  // If authenticated, return a dropdown with the user'Users info and a sign out button
  const dropdownLinks = [
    {
      link: '/dashboard',
      className: 'profile',
      value: 'profile',
      text: 'Your Profile',
      onclickHandler: dropDownSelector,
    },
    {
      link: '/dashboard',
      className: 'people',
      value: 'people',
      text: 'People',
      onclickHandler: dropDownSelector,
    },
    {
      link: '/dashboard',
      className: 'teams',
      value: 'teams',
      text: 'Teams',
      onclickHandler: dropDownSelector,
    },
    {
      link: '/dashboard',
      className: 'settings',
      value: 'settings',
      text: 'Settings',
      onclickHandler: dropDownSelector,
    },
    {
      link: '/',
      className: 'logout',
      value: 'logout',
      text: 'Logout',
      onclickHandler: authButtonMethod,
      isSeparated: true,
    },
  ];
  const navigationLinks = dropdownLinks.map(dropdownLink => (
      <DropdownItem key={dropdownLink.value} onClick={() => {
        dropdownLink.onclickHandler(dropdownLink.value);
      }}>
        {dropdownLink.isSeparated && (<DropdownItem divider/>)}
        <RouterNavLink className={dropdownLink.className} to={dropdownLink.link}
                       exact>
          {dropdownLink.text}
        </RouterNavLink>
      </DropdownItem>
  ));
  return isAuthenticated ?
      (
          <UncontrolledDropdown>
            <DropdownToggle className={'dropdownToggle'} nav caret>
            <i className="far fa-user-circle fa-lg rounded-circle align-self-center mr-2 nextrokr-navbar-avatar" />
            </DropdownToggle>
            <DropdownMenu className="nextrokrs-navbar" right>
              <h5 className="dropdown-item-text mb-0 displayName">{displayName}</h5>
              <p className="dropdown-item-text mb-0 eMail">{email}</p>
              <DropdownItem divider/>
              {navigationLinks}
            </DropdownMenu>
          </UncontrolledDropdown>
      ) : (
          // If not authenticated, return a sign in link
          <NavItem>
            <NavLink className={'signInNavBar'} onClick={authButtonMethod}>Sign
              In</NavLink>
          </NavItem>
      );
}

const NavBar = props => {
  const {isAuthenticated, authButtonMethod} = props;
  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => {
    toggleOpen(!isOpen);
  };

  let navigationLinks = null;
  if (isAuthenticated) {
    const navLinks = [
      {link: '/standups', className: 'standUps', text: 'StandUps'},
      {link: '/checkins', className: 'checkIns', text: 'Check-Ins'},
      {link: '/goals', className: 'goals', text: 'Goals'},
    ];
    if (config.env === 'trokrDev') {
      navLinks.unshift({
        link: '/components-demo',
        className: 'componentsDemo',
        text: 'Components',
      });
    }

    navigationLinks = navLinks.map(navLink => (
        <NavItem key={camelCase(navLink.text)}>
          <RouterNavLink to={navLink.link}
                         className={`nav-link ${navLink.className}`} exact>
            {navLink.text}
          </RouterNavLink>
        </NavItem>
    ));
  }

  return (
      <div className="nextrokrs-navbar">
        <Navbar expand="md" fixed="top" className="nextrokr-navbar">
          <Container>
            <NavbarBrand href="/">TrOKR Dashboard</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse className="nav justify-content-end" isOpen={isOpen}
                      navbar>
              <Nav className="nav justify-content-end" navbar>
                {navigationLinks}
                <AuthNavItem
                    isAuthenticated={isAuthenticated}
                    authButtonMethod={authButtonMethod}
                    user={props.user}/>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
  );
};

export default NavBar;