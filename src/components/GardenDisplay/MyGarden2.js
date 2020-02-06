import React from 'react'
import axios from 'axios'

import BurgerMenu from './../BurgerMenu/BurgerMenu'

import './GardenDisplay.css'

let userIDQuery = ''

class MyGarden extends React.Component {

    state = {
      user: []
    }

    handleClick = ( id ) => {
        console.log(id);
        const route = `/photo/${ id }`
        console.log('route:', route);

        this.props.history.push( route )
    }

    // handleAddPhotoClick = ( plantID ) => {
    //   console.log(plantID);
    //   const route = `/addphoto/${ plantID }`
    //   console.log('route:', route);
    //   this.props.history.push( route )
    // }


    componentDidMount(){
      // console.log('this.props.match.params.user_id', this.props.match.params.user_id);
      const token = localStorage.getItem('token')
      if (token){
        // console.log('TOKEN FOUND!', token);
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
          {
            this.state.user.plants.map(plant =>

              <div key={plant.id} className="gardenPlantIndex">

                <div className="burger-menu">
                  <BurgerMenu plantId={plant.id}/>
                </div>


                <div className="skew-left"></div>
                <div className="skew-right"></div>

                <div className="display-plant-name">
                    <p>{plant.name}</p>

                </div>

                {
                  plant.photos.map( photo =>

                      <img src={photo.image}  key={photo.id} className="myGardenPlantPhoto" onClick={() => this.handleClick(photo.id)}/>

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
