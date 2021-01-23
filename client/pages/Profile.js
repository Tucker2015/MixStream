import React from 'react';
import axios from 'axios';

export default class Navbar extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            stream_key: '',
            username: '',
            date: new Date().toLocaleString()
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
            <React.Fragment>

                <div className="container mt-5 " style={{ maxWidth: "100%", width: "400px" }}>
                    <div className="card">
                        <div className="card-header h3">Your Profile
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">Username : {this.state.username}</h5>
                            <h5 className="card-title">Email : {this.state.email}</h5>

                            <h5 className="card-title">Stream Key : {this.state.stream_key}</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>

                        </div>

                    </div>
                </div>

            </React.Fragment >
        )
    }
}