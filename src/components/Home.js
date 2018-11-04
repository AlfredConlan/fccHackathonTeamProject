import React, { Component } from 'react';
import { firebaseAuth } from '../config/constants';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import uploadImage from '../images/image_upload.png';

const firebaseAuthKey = 'firebaseAuthInProgress';
const appTokenKey = 'appToken';

export default class Home extends Component {

  async handleUploadSuccess(filename) {
    try {
      let { bucket, fullPath } = await firebase.storage().ref('images').child(filename).getMetadata();
      console.log('bucket', bucket)
      console.log('fullPath', fullPath)
      let downloadURL = await firebase.storage().ref('images').child(filename).getDownloadURL();
      console.log('downloadURL', downloadURL)
      let { uid, email, displayName } = await firebase.auth().currentUser;
      let newPhoto = {
        url: downloadURL,
        userName: displayName,
        userId: uid,
        email,
        bucket,
        fullPath
      }
      console.log('newPhoto', newPhoto);
      await firebase.firestore().collection('photos').add(newPhoto);
    }
    catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="main-content">
            <div>
              <img src={uploadImage} alt="upload" />
              <p>Upload an image to detect a disease</p>
              <button>
                Upload Image              
              <FileUploader
                hidden
                accept="image/*"
                storageRef={firebase.storage().ref('images')}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

firebaseAuth().onAuthStateChanged(user => {
  if (user) {
    localStorage.removeItem(firebaseAuthKey);
    localStorage.setItem(appTokenKey, user.uid);
    this.props.history.push('/app/home')
  }
})

// const Home = () => (
//   <header>
//     <div className="container">
//       <div className="main-content">
//         <div>
//           <img src={uploadImage} alt="upload" />
//           <p>Upload an image to detect a disease</p>
//           <button>Upload Image</button>
//         </div>
//       </div>
//     </div>
//   </header>
// )

// export default Home
