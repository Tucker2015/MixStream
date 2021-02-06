import React from "react";
import { Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LiveStreams from './components/LiveStreams';
import Settings from './pages/Settings';
import VideoPlayer from './components/VideoPlayer';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Upcoming from './pages/Upcoming';


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
                    <Footer />
                    <Route exact path="/profile" render={props => (
                        <Profile {...props} />
                    )} />
                    <Route exact path="/" render={props => (
                        <LiveStreams  {...props} />
                    )} />
                    <Route exact path="/upcoming" render={props => (
                        <Upcoming  {...props} />
                    )} />
                    <Route exact path="/stream/:username" render={(props) => (
                        <VideoPlayer {...props} />
                    )} />

                    <Route exact path="/settings" render={props => (
                        <Settings {...props} />
                    )} />
                    <Route exact path="/help" render={props => (
                        <Help {...props} />
                    )} />


                </div>

            </Router>

        )
    }
}