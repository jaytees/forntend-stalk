import React from 'react';
import axios from 'axios'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class Upload extends React.Component {

  state = {
    image_url: ''
  };

  uploadWidget = (event) => {

    event.preventDefault();

    console.log('here!');
    window.cloudinary.openUploadWidget({

      cloud_name: 'dlbfbi0rp', upload_preset: 'mtkzwbw5', tags:['plants']},
      (error, result) => {
          if(!error){
            console.log('successfully-uploaded', result[0].url);
            this.setState({ image_url: result[0].url });
            this.props.onImageUpload(result[0].url);
          } else {
            console.warn('ERROR UPLOADING', error);
          }
      });
      console.log('end');
  }

  render(){
    return (
      <div>
        <div className="upload">
                <button className="formButton" onClick={this.uploadWidget}>

                    Upload PLANT!
                </button>
                {
                  this.state.image_url.length === 0
                  ?
                  console.log("no image")
                  :
                  <img className="uploadImagePreview" src={this.state.image_url} style={{maxWidth: '200px'}}/>
                }
            </div>
      </div>
    );
  }

}

export default Upload;
