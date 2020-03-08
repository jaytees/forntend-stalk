import React from 'react'
import axios from 'axios'
import Upload from './Upload'

let plantID = ''
const userID = localStorage.getItem('userId')

class AddPhoto extends React.Component {

  state = {
    plant: [],
    image: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      photo: {
        image: this.state.image,
        description: this.state.description,
        plant_id: plantID
      }
    })


    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }


    axios.post(`${url}/photos.json`, {
      photo: {
        image: this.state.image,
        description: this.state.description,
        plant_id: plantID
      }
    })
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch( err => console.warn(err))
  }

  uploadWidget = (event) => {
    event.preventDefault()

    window.cloudinary.openUploadWidget({

      cloud_name: 'dlbfbi0rp', upload_preset: 'mtkzwbw5', tags:['plants']},
      (error, result) => {
          if(!error){

            this.setState({ image: result[0].url });


          } else {
            console.warn('ERROR UPLOADING', error);
          }
      });
  }

  componentDidMount(){
    plantID = this.props.match.params.plant_id

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }


    axios.get(`${url}/plants/${plantID}.json`)
    .then(res => {

      this.setState({plant: res.data})
    })
    .catch( err => console.warn(err))

    this.setState({plant_id : plantID })
  }

  handleImageUploaded = (imageURL) => {

    this.setState({imageURL: imageURL});
  }

  render(){
    return(
      <div className='App'>
        <h2>Add Photo of {this.state.plant.name}</h2>

        <form action="" onSubmit={this.handleSubmit}>
          <label>Description</label>
          <input type="text" name="description" onChange={this.handleChange}/> <br/>
          <label>ImageURL</label>
          <input type="text" name="imageURL" value={ this.state.imageURL } onChange={this.handleChange}/> <br/>


          <Upload onImageUpload={ this.handleImageUploaded }/>


          <button className="formButton">add update</button>

        </form>
        <div>
          <div className="upload">

            {
              this.state.image.length === 0
              ?
              <div>
                <button className="formButton" onClick={this.uploadWidget}>
                  Upload Photo!
                </button>
              </div>
              :
              <div class="uploadPhoto">
                <p>Image Uploaded!</p>
                <img className="uploadImagePreview" src={this.state.image} alt="upload preview"/>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

} // Class

export default AddPhoto
