import React from 'react';
import videojs, { VideoJsLogo } from 'video.js'
import axios from 'axios';
import config from '../../server/config/default';
import '../styles/VideoPlayer.scss';
import '@videojs/themes/dist/city/index.css';
import 'videojs-logo';
import Chatbox from './chatbox';
export default class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stream: false,
            videoJsOptions: null
        }
    }

    componentDidMount() {

        axios.get('/user', {
            params: {
                username: this.props.match.params.username
            }
        }).then(res => {
            this.setState({
                stream: true,
                videoJsOptions: {
                    preload: true,
                    autoplay: true,
                    controls: true,
                    sources: [{
                        src: 'https://live.kevtucker.com:' + config.rtmp_server.https.port + '/live/' + res.data.stream_key + '/index.m3u8',
                        type: 'application/x-mpegURL'
                    }],
                    fluid: true,
                }

            }, () => {
                this.player = videojs(this.videoNode, this.state.videoJsOptions, function onPlayerReady() {
                    console.log('onPlayerReady', this)
                });
            });
        })
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }


    render() {
        return (

            <div >
                <div className="titleVid">
                    {this.props.match.params.username} Live
                </div>

                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 mx-auto mt-5">
                    {this.state.stream ? (
                        <div className="playerBorder">
                            <div data-vjs-player >
                                <video ref={node => this.videoNode = node} className="video-js vjs-big-play-centered" />
                            </div>
                        </div>
                    ) : ' Loading ... '}

                </div>
                <Chatbox />
            </div>


        )
    }
}