import React from "react";
import { Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LiveStreams from './components/LiveStreams';
import Settings from './pages/Settings';
import VideoPlayer from './components/VideoPlayer';
import Help from './pages/Help';
import Profile from './pages/Profile';

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