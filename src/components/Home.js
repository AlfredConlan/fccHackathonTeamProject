import React from "react"
import uploadImage from "../images/image_upload.png"
import FileUploader from "react-firebase-file-uploader"
import firebase from 'firebase';

const Home = () => (
  <header>
    <div className="container">
      <div className="main-content">
        <div>
          <img src={uploadImage} alt="upload" />
          <p>Upload an image to detect any disease</p>
          <button>Upload Image</button>
          <FileUploader
            hidden
            accept="image/*"
            storageRef={firebase.storage().ref('plant-diseases')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </div>
      </div>
    </div>
  </header>
)

export default Home
