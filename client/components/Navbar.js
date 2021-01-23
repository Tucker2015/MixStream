import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { faHome, faVideo, faTv, faUserAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
require('../styles/NavBar.scss');
export default class Navbar extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            stream_key: '',
            username: ''
        };
    }

    componentDidMount() {
        this.getStreamKey();
    }

    getStreamKey() {
        axios.get('/settings/stream_key')
            .then(res => {
                console.log(res.data);
                this.setState({
                    stream_key: res.data.stream_key,
                    username: res.data.username,
                    email: res.data.email
                });
            })
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container">

                    <Link to={'/'} className={'navbar-brand'} >
                        <img src={logo} alt="" width="40" height="40" class="d-inline-block align-center rounded mr-2" />
                           MixStream
                    </Link>
                    <span className="navbar-text">
                        {this.state.username}
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item float-right">

                                <a className="nav-link" href="/"><FontAwesomeIcon icon={faTv} /> Live Streams</a>
                            </li>
                            <li className="nav-item float-right">
                                <a className="nav-link" href="/settings" ><FontAwesomeIcon icon={faVideo} /> Go Live
                                </a>
                            </li>

                            <li className="nav-item float-right">
                                <a className="nav-link" href="/profile"><FontAwesomeIcon icon={faUserAlt} /> Profile</a>
                            </li>
                            <li className="nav-item float-right">
                                <a className="nav-link" href="/Logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>


        )
    }
}