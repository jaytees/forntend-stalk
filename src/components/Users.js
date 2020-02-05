import React from 'react'
import axios from 'axios'

import './GardenDisplay/GardenDisplay.css'

class Users extends React.Component {

  state = {
    users: []
  }

  handleClick = ( id ) => {
    console.log(id);
    const route = `/mygarden/${ id }`
    console.log('route:', route);
    this.props.history.push( route )
}


  componentDidMount(){
    console.log('mounted');
    axios.get(`http://localhost:3000/users.json`)
    .then(res => {
      this.setState({users: res.data.users})
      console.log('this.state.users', this.state.users);
      console.log('this.state.res.data.users.length', this.state.users.length);
    })
    .catch(console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h2>Stalkers</h2>
          {
            this.state.users.length === 0
            ?
            <p>no users</p>
            :
            <div>
            {
            this.state.users.map( user =>

              <div className="gardenPlantIndex" onClick={() => this.handleClick(user.id)}>
                <div className="skew-left"></div>
                <div className="skew-right"></div>



                  <div className="display-plant-name">
                    <span>{user.username}s garden</span><br/>

                    
                  </div>

                  {

                    user.plants.map( plant =>

                        <img key={plant.id} className="myGardenPlantPhoto" src={plant.photos[0].image} alt=""/>

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

export default Users
