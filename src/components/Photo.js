import React from 'react'
import axios from 'axios'

const userID = localStorage.getItem('userId')

class Photo extends React.Component {

  state = {
    photo: []
  }

  handleDeleteClick = ( id ) => {

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }

    axios.delete(`${url}/photos/${id}.json`)
    .then(res => {
      console.log(res);
    })
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch( err => console.warn(err))
  }

  handleEditClick = ( id ) => {

    const route = `/editphoto/${ id }`

    this.props.history.push( route )
  }

  componentDidMount(){
    const photoIDQuery = this.props.match.params.photo_id

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }


    axios.get(`${url}/photos/${photoIDQuery}.json`)
    .then(res => {

      this.setState({photo: res.data})

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
