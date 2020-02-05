import React from 'react'
import axios from 'axios'

let userIDQuery = ''

class MyGarden extends React.Component {

  handleClick = ( id ) => {
    console.log(id);
    const route = `/photo/${ id }`
    console.log('route:', route);
    this.props.history.push( route )
}

  handleEditClick = ( id ) => {
    console.log(id);
    const route = `/editplant/${ id }`
    console.log('route:', route);
    this.props.history.push( route )
}

  state = {
    user: []
  }


  componentDidMount(){
    // console.log('this.props.match.params.user_id', this.props.match.params.user_id);
    const token = localStorage.getItem('token')
    if (token){
      console.log('TOKEN FOUND!', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // setTokenHeaderSet( true );
    }
    userIDQuery = this.props.match.params.user_id
    console.log(`userIDQuery`, userIDQuery);
    axios.get(`http://localhost:3000/users/${userIDQuery}.json`)
    .then(res => {
      this.setState({user: res.data})
      console.log('this.state.user', this.state.user);
      console.log(this.state.user.plants.length);
    })
    .catch(console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h2>Your Garden</h2>
        <p>{this.state.user.name}</p>
        {
          this.state.user.length === 0
          ?
          <p>loading</p>
          :
          <div>
          <p>plants</p>
          {
            this.state.user.plants.map(plant =>
              <div key={plant.id} className="profilePlantIndex">
                <p>{plant.name}</p><button onClick={() => this.handleEditClick(plant.id)}>edit</button>
                {
                  plant.photos.map( photo =>
                    <div key={photo.id} className="profilePlantPhoto" onClick={() => this.handleClick(photo.id)}>
                      <img src={photo.image} />
                    </div>
                  )
                }
              </div>
            )
          }
          </div>
        }
      </div>
    )
  }

} // Class

export default MyGarden
