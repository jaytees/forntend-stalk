import React from 'react';
// import {Image, Video} from 'cloudinary-react';

class Upload extends React.Component {

  state = {
    image_url: ''
  };

  uploadWidget = (event) => {

    event.preventDefault();


    window.cloudinary.openUploadWidget({

      cloud_name: 'dlbfbi0rp', upload_preset: 'mtkzwbw5', tags:['plants']},
      (error, result) => {
          if(!error){

            this.setState({ image_url: result[0].url });
            this.props.onImageUpload(result[0].url);

          } else {
            console.warn('ERROR UPLOADING', error);
          }
      });

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
                  <p>No Image</p>
                  :
                  <img className="uploadImagePreview" src={this.state.image_url} alt="upload preview" style={{maxWidth: '200px'}}/>
                }
            </div>
      </div>
    );
  }

}

export default Upload;
