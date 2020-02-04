import React from 'react';
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
            console.log('succefully-uploaded', result);
            this.setState({ image_url: result[0].url });
            // this.props.reportUploadId( result[0].public_id } );
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
                  <p>noimage</p>
                  :
                  <img className="uploadImagePreview" src={this.state.image_url} />
                }

            </div>

      </div>
    );
  }

}

export default Upload;
