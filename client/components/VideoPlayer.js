import React from 'react';
import videojs, { VideoJsLogo } from 'video.js'
import axios from 'axios';
import config from '../../server/config/default';
import '../styles/VideoPlayer.scss';
import Chatbox from './chatbox';
import watermark from 'videojs-watermark';
import '../../node_modules/videojs-watermark/dist/videojs-watermark.css';
import Upcoming from '../pages/Upcoming';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stream: false,
            videoJsOptions: null
        }
    }

    componentDidMount() {
        videojs.registerPlugin('watermark', watermark)


        axios.get('/user', {
            params: {
                username: this.props.match.params.username
            }
        }).then(res => {

            this.setState({

                stream: true,
                videoJsOptions: {
                    plugins: {
                        watermark: {
                            image: 'https://ktinternet.net/radio-logos/video_logo.png',
                            position: 'top-left',
                            hideOnReady: true,
                            fadeTime: 10000,
                        },
                    },
                    retryOnError: true,
                    playsinline: true,
                    suppressNotSupportedError: true,
                    notSupportedMessage: 'Currently The stream is unavailable',
                    preload: true,
                    autoplay: true,
                    controls: true,
                    sources: [{
                        src: 'https://live.mixshare.co.uk:' + config.rtmp_server.https.port + '/live/' + res.data.stream_key + '/index.m3u8',
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

            <div className="">
                <div className="containerVideo">
                    <div className="box">
                        {this.state.stream ? (
                            <div className="">
                                <div className="item" data-vjs-player >
                                    <video ref={node => this.videoNode = node} style={{ outline: 'none' }} className="video-js vjs-big-play-centered" />
                                </div>
                            </div>
                        ) : ' Loading ... '}
                        <div className="titleVid"><FontAwesomeIcon className="icon-flash" icon={faCircle} size={24} />
                            {this.props.match.params.username} Live
                </div>
                    </div>
                    <div className="box">
                        <Chatbox />
                    </div>
                </div>
                <Upcoming />
            </div>


        )
    }
}