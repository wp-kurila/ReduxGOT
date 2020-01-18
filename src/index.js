import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/errorBoundry';
import GotService from './services/gotService';
import GotServiceContext from './components/gotServiceContext/';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const gotService = new GotService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <GotServiceContext.Provider value={gotService}>
                <Router>
                    <App />
                </Router>
            </GotServiceContext.Provider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root'));