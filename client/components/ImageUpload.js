import React, { useState } from 'react'

// import './App.css'

function ImageUpload() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            '/server/media/profiles',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div className="App">
            <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadImage}
            />
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                    <img src={image} style={{ width: '300px' }} />
                )}
        </div>
    )
}

export default ImageUpload