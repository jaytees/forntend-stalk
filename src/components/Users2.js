import React from 'react'
import axios from 'axios'

import './GardenDisplay/GardenDisplay.css'

import LastWatered from './LastWatered'
import BurgerMenu from './BurgerMenu/BurgerMenu'

class Users2 extends React.Component {

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

                          <img src={plant.photos[0].image}  key={plant.id} className="myGardenPlantPhoto" onClick={() => this.handleClick(user.id)}/>


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

export default Users2
