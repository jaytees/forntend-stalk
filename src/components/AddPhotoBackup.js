import React from 'react'
import axios from 'axios'
import Upload from './Upload'

let plantID = ''
const userID = localStorage.getItem('userId')

class AddPhoto extends React.Component {

  state = {
    plant: []
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

  render(){
    return(
      <div className='App'>
        <h2>Add Photo of {this.state.plant.name}</h2>

        <form action="" onSubmit={this.handleSubmit}>
          <label>Description</label>
          <input type="text" name="description" onChange={this.handleChange}/> <br/>
          <label>ImageURL</label>
          <input type="text" name="image" onChange={this.handleChange}/> <br/>

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
                      <img className="uploadImagePreview" src={this.state.image_url} />
                    }
                </div>
          </div>
          <button className="formButton">add update</button>

        </form>
      </div>
    )
  }

} // Class

export default AddPhoto
