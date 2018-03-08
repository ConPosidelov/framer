import React from 'react';
import { Meteor } from 'meteor/meteor';
import Icon from '../../components/Icon/Icon';
import { Grid  } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import './Logout.scss';

class Logout extends React.Component {
  componentDidMount() {
    Meteor.logout();
  }

  render() {
    return (
      <div className="App">
        <Navigation {...this.props} />
          <Grid>
            <div className="Logout">
              
            </div>
          </Grid>
        <Footer />
      </div>
    );
  }
}

Logout.propTypes = {};

export default Logout;
