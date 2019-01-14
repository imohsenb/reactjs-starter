import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './app';

ReactDOM.render((
    <HashRouter>
        <CookiesProvider>
            <App  />
        </CookiesProvider>
    </HashRouter>

), document.getElementById('container'));
