import React from 'react';
import { STORE } from '../../../stores/store';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';

import './Navigation.scss';

const PublicNavigation = () => (
  <Nav pullRight>
       <NavItem onClick={() => STORE.dispatch(push('/login'))}>Log In</NavItem>
  </Nav>
);

const Navigation = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Pup</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {!props.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
    </Navbar.Collapse>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
