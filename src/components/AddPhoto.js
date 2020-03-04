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
    console.log(this.state.photo);
    const photoParams = this.state.photo
    console.log('photoParams:', photoParams);
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.post(`${url}/photos.json`, {
      photo: {
        image: this.state.image,
        description: this.state.description,
        plant_id: plantID
      }
    })
    .then(console.log)
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch(console.log)
  }

  uploadWidget = (event) => {
    event.preventDefault()

    window.cloudinary.openUploadWidget({

      cloud_name: 'dlbfbi0rp', upload_preset: 'mtkzwbw5', tags:['plants']},
      (error, result) => {
          if(!error){
            console.log('successfully-uploaded', result[0].url);
            this.setState({ image: result[0].url });

            // this.props.Photo(result[0].url);
            // axios.post(`http://localhost:3000/photos`, {id: , photo: {image: result[0].url}})
            // .then(result => console.log('photo saved', result))
            // .catch(error => console.log('photo not saved', error));
          } else {
            console.warn('ERROR UPLOADING', error);
          }
      });
  }

  componentDidMount(){
    plantID = this.props.match.params.plant_id
    console.log(`plantID: ${plantID}`);
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.get(`${url}/plants/${plantID}.json`)
    .then(res => {
      console.log(res);
      this.setState({plant: res.data})
    })
    .catch(console.warn)
    this.setState({plant_id : plantID })
  }

  handleImageUploaded = (imageURL) => {
    console.log('in AddPhoto', imageURL);
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
                <img className="uploadImagePreview" src={this.state.image} />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

} // Class

export default AddPhoto
