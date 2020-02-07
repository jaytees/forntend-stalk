import React from 'react'
import axios from 'axios'

let plantIDQuery = ''


class Plant extends React.Component {

  state = {
    plant: []
  }

  componentDidMount(){
    // console.log('this.props.match.params.user_id', this.props.match.params.user_id);
    const token = localStorage.getItem('token')
    if (token){
      console.log('TOKEN FOUND!', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // setTokenHeaderSet( true );
    }
    plantIDQuery = this.props.match.params.plant_id
    console.log(`plantIDQuery`, plantIDQuery);
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.get(`${url}/plants/${plantIDQuery}.json`)
    .then(res => {
      console.log('res:', res);
      this.setState({plant: res.data})
      console.log('plant:', this.state.plant);
    })
    .catch(console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h2>Plant</h2>
        <p>{this.state.plant.name} - {this.state.plant.planttype}</p> <br/>
        {
          this.state.plant.length === 0
          ?
          <p>loading...</p>
          :
          // <p>photos</p>
          this.state.plant.photos.map( photo =>
            <div key={photo.id}>
              <img src={photo.image} alt=""/>
            </div>
          )
        }
      </div>
    )
  }

} // Class

export default Plant
