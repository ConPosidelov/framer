import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, FormGroup, ControlLabel, Button, Grid } from 'react-bootstrap';
import Navigation from '../../components/common/Navigation/Navigation';
import Footer from '../../components/common/Footer/Footer';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import OAuthLoginButtons from '../../components/common/OAuthLoginButtons/OAuthLoginButtons';

import validate from '../../../modules/validate';

class Login extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const component = this;

    validate(component.form, {
      rules: {
        emailAddress: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address correct?',
        },
        password: {
          required: 'Need a password here.',
        },
      },
      submitHandler() { component.handleSubmit(); },
    });
  }

  handleSubmit = () => {
    Meteor.loginWithPassword(this.emailAddress.value, this.password.value, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Welcome back!', 'success');
      }
    });
  }

  render() {
    console.log('login', this.props);
    return (
      <div className="App">
        <Navigation {...this.props} />
          <Grid>

            <div className="Login">
              <Row>
                <Col xs={12} sm={6} md={5} lg={4}>
                  <h4 className="page-header">Log In</h4>
                  <Row>
                    <Col xs={12}>
                      <OAuthLoginButtons
                        services={['facebook', 'github', 'google']}
                        emailMessage={{
                          offset: 100,
                          text: 'Log In with an Email Address',
                        }}
                      />
                    </Col>
                  </Row>
                  <form ref={form => (this.form = form)} onSubmit={event => event.preventDefault()}>
                    <FormGroup>
                      <ControlLabel>Email Address</ControlLabel>
                      <input
                        type="email"
                        name="emailAddress"
                        ref={emailAddress => (this.emailAddress = emailAddress)}
                        className="form-control"
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="clearfix">
                        <span className="pull-left">Password</span>
                       
                      </ControlLabel>
                      <input
                        type="password"
                        name="password"
                        ref={password => (this.password = password)}
                        className="form-control"
                      />
                    </FormGroup>
                    <Button type="submit" bsStyle="success">Log In</Button>
                    
                  </form>
                </Col>
              </Row>
            </div>

          </Grid>
        <Footer />
      </div>

    );
  }
}

//export default Login;

const mapStateToProps = state => {
    //console.log('state', state);
    const { 
      meteor: { loading }, 
      users: { loggingIn, authenticated, name, roles, userId }
    } = state;
    
    return {
      loading,
      loggingIn,
      authenticated,
      name,
      roles,
      userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Login);
