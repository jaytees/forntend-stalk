import React from 'react';
import axios from 'axios'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class Upload extends React.Component {

  state = {
    image_url: ''
  };

  uploadWidget = () => {

    window.cloudinary.openUploadWidget({

      cloud_name: 'dlbfbi0rp', upload_preset: 'mtkzwbw5', tags:['plants']},
      (error, result) => {

          if(!error){
            console.log('successfully-uploaded', result[0].url);
            this.setState({ image_url: result[0].url });

            this.props.Photo(result[0].url);
            // axios.post(`http://localhost:3000/photos`, {id: , photo: {image: result[0].url}})
            // .then(result => console.log('photo saved', result))
            // .catch(error => console.log('photo not saved', error));

          } else {
            console.warn('ERROR UPLOADING', error);
          }

      });
  }

  render(){
    return (
      <div>

        <div className="upload">

                <button onClick={this.uploadWidget} className="upload-button">
                    Upload PLANT!
                </button>
                {
                  this.state.image_url.length === 0
                  ?
                  console.log("no image")
                  :
                  <img className="uploadImagePreview" src={this.state.image_url} />
                }

            </div>

      </div>
    );
  }

}

export default Upload;
