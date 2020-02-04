import React from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class Upload extends React.Component {

  state = {
    publicId: ''
  };

  uploadWidget = () => {

    window.cloudinary.openUploadWidget({ cloud_name: 'dlbfbi0rp', upload_preset: 'mtkzwbw5', tags:['']},
      (error, result) => {

          if(!error){
            console.log('succefully-uploaded', result);
            this.setState({ publicId: result[0].public_id });
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

            </div>

      </div>
    );
  }

}

export default Upload;
