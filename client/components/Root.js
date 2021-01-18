import React from "react";
import { Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LiveStreams from './LiveStreams';
import Settings from './Settings';
import VideoPlayer from './VideoPlayer';
import Help from '../pages/Help';
import Profile from '../pages/Profile';

const customHistory = require("history").createBrowserHistory();

export default class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={customHistory} >
                <div>

                    <Navbar />
                    <Route exact path="/" render={props => (
                        <LiveStreams  {...props} />
                    )} />

                    <Route exact path="/stream/:username" render={(props) => (
                        <VideoPlayer {...props} />
                    )} />

                    <Route exact path="/settings" render={props => (
                        <Settings {...props} />
                    )} />
                    <Route exact path="/pages/help" render={props => (
                        <Help {...props} />
                    )} />
                    <Route exact path="/pages/profile" render={props => (
                        <Profile {...props} />
                    )} />
                </div>
            </Router>

        )
    }
}