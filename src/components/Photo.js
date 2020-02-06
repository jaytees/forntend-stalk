import React from 'react'
import axios from 'axios'
import Upload from './Upload'

const userID = localStorage.getItem('userId')

class Photo extends React.Component {

  state = {
    photo: []
  }

  handleDeleteClick = ( id ) => {
    console.log('id:', id)
    // console.log(`http://localhost.com:3000/plants/${id}.json`)
    axios.delete(`http://localhost:3000/photos/${id}.json`)
    .then(res => {
      console.log(res);
    })
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch(console.warn)
  }

  handleEditClick = ( id ) => {
    console.log(id);
    const route = `/editphoto/${ id }`
    console.log('route:', route);
    this.props.history.push( route )
  }

  componentDidMount(){
    const photoIDQuery = this.props.match.params.photo_id
    // console.log(`photoIDQuery`, photoIDQuery);
    axios.get(`http://localhost:3000/photos/${photoIDQuery}.json`)
    .then(res => {
      // console.log(res);
      this.setState({photo: res.data})
      // console.log('this.state.user', this.state.user);
      // console.log(this.state.user.plants.length);
    })
    .catch(console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h2>Photo Description</h2>
        {this.state.photo.id}
        <img className="mainPhoto" src={this.state.photo.image} alt=""/>
        <p>{this.state.photo.description}</p>
        <button onClick={() => this.handleDeleteClick(this.state.photo.id)}>remove photo</button>
        <button onClick={() => this.handleEditClick(this.state.photo.id)}>edit photo</button>
      </div>
    )
  }

} // Class

export default Photo
