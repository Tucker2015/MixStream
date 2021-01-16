import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (

            // Boxes
            <div className="container mt-5 w-25">
                <div class="card">
                    <div class="card-header">
                        Trouble Connecting Live
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

