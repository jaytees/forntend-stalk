import React from 'react'
import axios from 'axios'

import './GardenDisplay/GardenDisplay.css'

import LastWatered from './LastWatered'
import BurgerMenu from './BurgerMenu/BurgerMenu'

class Users extends React.Component {

  state = {
    users: []
  }

  handleClick = ( id ) => {

    const route = `/mygarden/${ id }`

    this.props.history.push( route )
}


  componentDidMount(){

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }

    axios.get(`${url}/users.json`)

    .then(res => {
      this.setState({users: res.data.users})
    })
    .catch(err => console.warn(err))
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

                <div key={user.id} className="gardenItem" onClick={() => this.handleClick(user.id)}>

                  <div className="gardenItem-header">

                    {
                    this.props.history.location !== "/home"
                    ?
                    <div>
                      <div className="water-gardenItem">
                          <p>Click to View Full Garden!</p>
                      </div>

                      <div className="water-gardenItem">

                      </div>
                    </div>
                    :
                    <div>
                      <div className="water-gardenItem">
                          <LastWatered plant={user}/>
                      </div>

                      <div className="burger-menu-gardenItem">
                          <BurgerMenu plantId={user.id}/>
                      </div>
                    </div>
                    }

                      <div className="plant-name-gardenItem">
                          <p>{user.username}s garden</p>
                      </div>



                  </div>

                  <div className="gardenItem-images">
                    {
                      user.plants.map( plant =>

                          <img src={plant.photos[0].image}  key={plant.id} alt={plant.name} className="myGardenPlantPhoto" onClick={() => this.handleClick(user.id)}/>


                      )
                    }
                  </div>

                  <div className="gardenItem-shelf">
                    <div className="skew-left"></div>
                    <div className="skew-right"></div>
                  </div>

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
