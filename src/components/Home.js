import React from "react"
import uploadImage from "../images/image_upload.png"

const Home = () => (
  <header>
    <div className="container">
      <div className="main-content">
        <div>
          <img src={uploadImage} alt="upload image" />
          <p>Upload an image to detect any disease</p>
          <button>Upload Image</button>
        </div>
      </div>
    </div>
  </header>
)

export default Home
