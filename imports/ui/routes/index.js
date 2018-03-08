import { Meteor } from 'meteor/meteor';
import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Index from '../containers/Index/Index.container';
import Login from '../containers/Login/Login.container';


//import Authenticated from '../components/Authenticated/Authenticated';
//import Public from '../components/Public/Public';
//import Logout from '../pages/Logout/Logout';
//import Profile from '../pages/Profile/Profile';
//import NotFound from '../pages/NotFound/NotFound';

//import Terms from '../pages/Terms/Terms';
//import Privacy from '../pages/Privacy/Privacy';

import getUserName from '../../modules/get-user-name';

import './Routes.scss';

const Routes = () => {
  console.log('Routes');
  return (
    <div className="App">
      <Route exact path="/" component= {Index}/>
      <Route path="/login" component={Login}/>
       
      
    </div>
  )
};


export default Routes;
