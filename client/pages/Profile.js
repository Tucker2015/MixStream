import React from 'react';
import axios from 'axios';

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
                    username: res.data.username
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
                            <h5 class="card-title">Username : {this.state.username}</h5>
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