import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap';
require('./styles/index.scss');

import Root from './Root.js';

if (document.getElementById('root')) {
    ReactDOM.render(

        <BrowserRouter>

            <Root />

        </BrowserRouter>,
        document.getElementById('root')
    );
}

