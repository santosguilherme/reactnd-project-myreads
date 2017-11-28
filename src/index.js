import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import 'babel-polyfill';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
