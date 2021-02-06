import React, { Component } from 'react'
import htrain from '../assets/htrain.jpg';
import pcr from '../assets/pcr_logo.jpg';
import '../styles/Upcoming.scss';

export default class Upcoming extends Component {

    render() {


        return (
            <div className="mb-5">
                <div className="container mt-5">
                    <h1 className="mainBannerText">Upcoming Live Streams</h1>
                    <hr className="my-4" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="card bg-dark text-light">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="card-avatar" src={htrain} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title" style={{ fontWeight: 800 }}>The H-Train Show on MBR Radio</h3>
                                        <p className="card-text">The show was created to help Veterans explore all the nonprofits that are out there when VA isnt helping and it educates the public weeding out the good nonprofits from that bad. Our version of #StolenValor for nonprofits. We are on Stitcher, Itunes</p>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <h5 className="text-muted">Monday's 8pm - 10pm EST</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="card bg-dark text-light">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="card-avatar" src={pcr} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title" style={{ fontWeight: 800 }}>Peoples City Radio Live</h3>
                                        <p className="card-text">All about the Music and always will be.  Live streams from our PCR DJ's</p>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <h5 className="text-muted">Thursday's 9pm - 11pm GMT</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

