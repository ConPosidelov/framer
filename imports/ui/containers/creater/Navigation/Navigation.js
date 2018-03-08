import React from 'react';
import { STORE } from '../../../stores/store';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../../../components/common/AuthenticatedNavigation/AuthenticatedNavigation';

import './Navigation.scss';

const PublicNavigation = () => (
  <Nav pullRight>
       <NavItem onClick={() => STORE.dispatch(push('/login'))}>Log In</NavItem>
  </Nav>
);


class Navigation extends React.Component {

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    const {
      vewPanels: { navigation }

    }= this.props;


    return  (
      
      <div className='navigation' style= { navigation.style }>
        
        <div className="brand_logo material-icons">casino
        </div>
        <div className='nav_left'>
          <div className='project_name'> 
             No name
          </div>
          <div className='nav_menu'>
            <Nav  activeKey="1" onSelect={k => this.handleSelect(k)}>
              <NavDropdown eventKey="1" title="Dropdown"  id="nav-dropdown1">
                <MenuItem eventKey="1.1">Action</MenuItem>
                <MenuItem eventKey="1.2">Another action</MenuItem>
                <MenuItem eventKey="1.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="1.4">Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey="2" title="Dropdown" id="nav-dropdown2">
                <MenuItem eventKey="2.1">Action</MenuItem>
                <MenuItem eventKey="2.2">Another action</MenuItem>
                <MenuItem eventKey="2.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2.4">Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown3">
                <MenuItem eventKey="3.1">Action</MenuItem>
                <MenuItem eventKey="3.2">Another action</MenuItem>
                <MenuItem eventKey="3.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="3.4">Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown4">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey="5" title="Dropdown"id="nav-dropdown5">
                <MenuItem eventKey="5.1">Action</MenuItem>
                <MenuItem eventKey="5.2">Another action</MenuItem>
                <MenuItem eventKey="5.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="5.4">Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </div>

        </div>
        <div className='auth'> 
          {!this.props.users.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...this.props} />}
        </div>
      </div>


    );
  }
};


Navigation.propTypes = {
  users: PropTypes.object.isRequired
  
};

export default Navigation;
