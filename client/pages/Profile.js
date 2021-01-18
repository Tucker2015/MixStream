import React from 'react'

function Profile() {
    return (
        <div className="container mt-5 " style={{ maxWidth: "100%", width: "400px" }}>
            <div class="card">
                <div class="card-header">Profile
                    </div>
                <div class="card-body">
                    <h5 class="card-title">Username :</h5>
                    <h5 class="card-title">Email :</h5>
                    <h5 class="card-title">Stream Key :</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>

            </div>
        </div>
    )
}

export default Profile
