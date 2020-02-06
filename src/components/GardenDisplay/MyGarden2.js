import React from 'react'
import axios from 'axios'

import BurgerMenu from './../BurgerMenu/BurgerMenu'

import './GardenDisplay2.css'
import LastWatered from './../LastWatered.js'

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
        <h2>{this.state.user.name}s Garden</h2>
        {
          this.state.user.length === 0
          ?
          <p>loading</p>
          :
            <div>
            {
              this.state.user.plants.map(plant =>

                <div key={plant.id} className="gardenItem">

                  <div className="gardenItem-header">

                      {
                        (this.props.tokenHeaderValue) &&
                        <div>
                          <div className="water-gardenItem">
                              <LastWatered plant={plant}/>
                          </div>

                          <div className="burger-menu-gardenItem">
                              <BurgerMenu plantId={plant.id}/>
                          </div>
                        </div>
                      }

                      <div className="plant-name-gardenItem">
                          <p>{plant.name}</p>
                      </div>



                  </div>

                  <div className="gardenItem-images">
                    {
                      plant.photos.map( photo =>

                          <img src={photo.image}  key={photo.id} className="myGardenPlantPhoto" onClick={() => this.handleClick(photo.id)}/>

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

export default MyGarden
