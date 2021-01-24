import React from 'react';
import axios from 'axios';
import logo from '../assets/profile.png'
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
        this.getProfileInfo();
    }

    getProfileInfo() {
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

            <div className="slide container mt-5 " style={{ maxWidth: "100%", width: "400px" }}>
                <div className="card">
                    <img src={logo} alt="" height="200" />
                    <div className="card-header h3">Your Profile
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Username : {this.state.username}</h5>
                        <h5 className="card-title">Email : {this.state.email}</h5>
                        <h5 className="card-title">Stream Key : {this.state.stream_key}</h5>
                        <hr></hr>
                        <form>
                            <div className="form-group">
                                <h5 className="card-title" for="fileUpload">Upload Profile Image</h5>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                                <button className="btn btn-primary mt-2 ">Upload</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}