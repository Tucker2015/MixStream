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

        this.generateStreamKey = this.generateStreamKey.bind(this);
    }

    componentDidMount() {
        this.getStreamKey();
    }

    generateStreamKey(e) {

        axios.post('/settings/stream_key')
            .then(res => {
                this.setState({
                    stream_key: res.data.stream_key
                });
            })
    }

    getStreamKey() {
        axios.get('/settings/stream_key')
            .then(res => {
                this.setState({
                    stream_key: res.data.stream_key
                });
            })
    }

    onClickQR() {
        window.location.href = qrCode;
    }

    // larix://set/v1?conn[][url]=rtmp%3A%2F%2F176.9.31.102%3A1935%2Flive%2F&conn[][name]=MixStream%20Live&conn[][overwrite]=on&enc[vid][res]=1280%20x%20720&enc[vid][bitrate]=1000&deleteConn=1
    render() {
        let qrCode = "larix://set/v1?conn[][url]=rtmp%3A%2F%2F176.9.31.102%3A1935%2Flive%2F" + this.state.stream_key + "&conn[][name]=MixShare%20Live&conn[][overwrite]=on&enc[vid][res]=1280x720&enc[vid][bitrate]=1000&deleteConn=1";


        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="card" style={{ maxWidth: "100%", width: "400px" }}>
                        <div className="card-header h4">Your Live Streaming Key :
                    </div>
                        <div className="card-body">
                            <h4 className="card-title">{this.state.stream_key}</h4>
                            <button
                                className="btn btn-danger mt-3"
                                onClick={this.generateStreamKey}>
                                Generate a new key
                            </button>

                        </div>

                    </div>
                </div>

                <div className="container mt-5 ">
                    <h4 className="textHeader">How to Stream</h4>
                    <hr className="my-3" />
                    <div className="col-12">
                        <div className="row">
                            <p className="textBody">
                                You can use <a target="_blank" href="https://obsproject.com/">OBS</a> or
                                <a target="_blank" href="https://www.xsplit.com/">XSplit</a> to Live stream. If you're
                                using OBS, go to Settings - Stream and select Custom from service dropdown.
                                Enter <b>rtmp://live.mixshare.co.uk:1935/live</b> in server input field. Also, add your stream key.
                                Click apply to save.
                            </p>
                            <img src={obsconfig} class="w-75 h-75 " alt="..."></img>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h4 className="textHeader">Using Larix with Mobile</h4>
                    <hr className="my-3" />
                    <p className="textBody">
                        To use Larix simply download the App from the links below :
                    </p>
                    <div className="">
                        <p className="textBody" >Download Larix for Mobile</p>
                        <a href="https://play.google.com/store/apps/details?id=com.wmspanel.larix_broadcaster" class="btn btn-secondary btn-m mr-2" role="button" aria-disabled="true">Download Larix for Android</a>

                        <a href="https://apps.apple.com/us/app/larix-broadcaster/id1042474385" class="btn btn-secondary btn-m m-1" role="button" aria-disabled="true">Download Larix for iOS</a>
                        <p className="textBody mt-3">Then hit the button below to open your profile in Larix automatically :</p>
                        <a href={qrCode} class="btn btn-secondary btn-lg mt-2" role="button" aria-disabled="true">Open Profile in Larix</a>
                    </div>

                    <p className="textBody mt-3">Or scan the QR code to Add Profile</p>
                    <div className="qr mb-5"><QRCode value={qrCode} /></div>
                </div>

            </React.Fragment >
        )
    }
}