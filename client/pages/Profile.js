import React from 'react';
import axios from 'axios';
import { QRCode } from 'react-qrcode-logo';
import obsconfig from '../assets/obsconfig.png';

export default class Navbar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            stream_key: ''
        };
    }

    componentDidMount() {
        this.getStreamKey();
    }

    getStreamKey() {
        axios.get('/settings/stream_key')
            .then(res => {
                this.setState({
                    stream_key: res.data.stream_key
                });
            })
    }


    render() {

        return (
            <React.Fragment>
                <div className="container mt-5 " style={{ maxWidth: "100%", width: "400px" }}>
                    <div class="card">
                        <div class="card-header h3">Profile
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Username :</h5>
                            <h5 class="card-title">Email :</h5>
                            <h5 class="card-title">Stream Key : {this.state.stream_key}</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                </div>

            </React.Fragment >
        )
    }
}