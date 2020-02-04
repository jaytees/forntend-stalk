import React from 'react'
import axios from 'axios'

class Photo extends React.Component {

  state = {
    photo: []
  }

  componentDidMount(){
    console.log(this.props);
    const photoIDQuery = this.props.match.params.photo_id
    console.log(`photoIDQuery`, photoIDQuery);
    axios.get(`http://localhost:3000/photos/${photoIDQuery}.json`)
    .then(res => {
      console.log(res);
      this.setState({photo: res.data})
      // console.log('this.state.user', this.state.user);
      // console.log(this.state.user.plants.length);
    })
    .catch(console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h2>UPDATE FOR THIS IMAGE - ADD DESCRIPTION</h2>
        {this.state.photo.id}
        <img className="mainPhoto" src={this.state.photo.image} alt=""/>
      </div>
    )
  }

} // Class

export default Photo
