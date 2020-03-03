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
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.delete(`${url}/photos/${id}.json`)
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
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.get(`${url}/photos/${photoIDQuery}.json`)
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
        <div className="displayPhoto">
        <img className="mainPhoto" src={this.state.photo.image} alt=""/>
        <p>{this.state.photo.name} - {this.state.photo.description}</p>
        <div className="profileButtons">
          <div className="centerText formButton slide-top smallerButton" onClick={() => this.handleDeleteClick(this.state.photo.id)}>DELETE</div>
          <div className="centerText formButton slide-top smallerButton" onClick={() => this.handleEditClick(this.state.photo.id)}>EDIT</div>
        </div>
        </div>
      </div>
    )
  }

} // Class

export default Photo
