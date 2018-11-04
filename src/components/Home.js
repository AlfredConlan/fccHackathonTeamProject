import React from "react"
import uploadImage from "../images/image_upload.png"

const Home = () => (
  <header>
    <div className="container">
      <div className="main-content">
        <div>
          <img src={uploadImage} alt="upload" />
          <p>Upload an image to detect a disease</p>
          <button>Upload Image</button>
        </div>
      </div>
    </div>
  </header>
)

export default Home
