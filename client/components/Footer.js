import React, { Component } from 'react'
import axios from 'axios';
export default class Footer extends Component {



    render() {
        const axios = require('axios');
        axios.get('http://live.kevtucker.com:8888/api/streams').then(res => {
            console.log(res.data);
        });

        return (

            // Boxes
            <div className="container mt-5 " style={{ maxWidth: "100%", width: "400px" }}>
                <div class="card">
                    <div class="card-header">Help
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Having issues connecting ?</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>

                </div>


                <div class="card mt-2">
                    <div class="card-header">
                        Help
                  </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="text-center text-red bg-light mt-2">MixStream</div>
            </div>

        )
    }
}

