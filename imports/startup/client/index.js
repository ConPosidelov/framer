import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { STORE, history } from '../../ui/stores/store';
import Routes from '../../ui/routes/index';

import '../both/api';
import '../../ui/stylesheets/app.scss';


Meteor.startup(() => {
    ReactDOM.render(
        <Provider store = { STORE }>
            <ConnectedRouter history = {history}> 
                <Routes/>
            </ConnectedRouter>   
        </Provider>
        , document.getElementById('react-root')
    )
});





    
