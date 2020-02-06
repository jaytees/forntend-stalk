import React from 'react'
import axios from 'axios'

let photoID = ''
let plantID = ''
const userID = localStorage.getItem('userId')

class EditPhoto extends React.Component {

  state = {
    photo: [],
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
    }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.photoNew);
    const photo = {
      // photo : {
        image: this.state.image,
        description: this.state.description
      // }
    }
    console.log('photo:', photo);
    axios.put(`http://localhost:3000/photos/${photoID}.json`, {
      photo
    })
    .then(console.log)
    .then(this.props.history.push(`/photo/${photoID}`))
    .catch(console.log)
  }

  componentDidMount(){
    photoID = this.props.match.params.photo_id
    console.log(`plantID: ${plantID}`);
    axios.get(`http://localhost:3000/photos/${photoID}.json`)
    .then(res => {
      console.log(res);
      this.setState({photo: res.data})
    })
    .catch(console.warn)
    // this.setState({plant_id : plantID })
  }

  render(){
    return(
      <div className='App'>
        <h2>Edit Photo for {this.state.photo.name}</h2>

        <form action="" onSubmit={this.handleSubmit}>
          <label>Description</label>
          <input type="text" name="description" defaultValue={this.state.photo.description} onChange={this.handleChange}/> <br/>
          <label>ImageURL</label>
          <input type="text" name="image" defaultValue={this.state.photo.image} onChange={this.handleChange}/> <br/>
          <button>add update</button>
        </form>
      </div>
    )
  }

} // Class

export default EditPhoto
