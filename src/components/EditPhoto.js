import React from 'react'
import axios from 'axios'

let photoID = ''

class EditPhoto extends React.Component {

  state = {
    photo: [],
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
    }

  handleSubmit = (event) => {
    event.preventDefault();

    const photo = {

        image: this.state.image,
        description: this.state.description

    }

    axios.put(`http://localhost:3000/photos/${photoID}.json`, {
      photo
    })
    .then(this.props.history.push(`/photo/${photoID}`))
    .catch(err => console.warn(err))
  }

  componentDidMount(){
    photoID = this.props.match.params.photo_id

    axios.get(`http://localhost:3000/photos/${photoID}.json`)
    .then(res => {

      this.setState({photo: res.data})
    })
    .catch(console.warn)

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
