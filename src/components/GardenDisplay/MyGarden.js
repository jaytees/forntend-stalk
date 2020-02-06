import React from 'react'
import axios from 'axios'

import './GardenDisplay.css'
import BurgerTest from './../BurgerTest'

let userIDQuery = ''

class MyGarden extends React.Component {

  handleClick = ( id ) => {
    console.log(id);
    const route = `/photo/${ id }`
    console.log('route:', route);

    this.props.history.push( route )
}

//   handleEditClick = ( id ) => {
//     console.log(id);
//     const route = `/editplant/${ id }`
//     console.log('route:', route);
//     this.props.history.push( route )
// }
//
//   handleDeleteClick = ( id ) => {
//     console.log(id)
//     // console.log(`http://localhost.com:3000/plants/${id}.json`)
//     axios.delete(`http://localhost:3000/plants/${id}.json`)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(console.warn)
//     // const route = `/editplant/${ id }`
//     // console.log('route:', route);
//     // this.props.history.push( route )
// }

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

  // <button onClick={() => this.handleEditClick(plant.id)} className="editButton">edit</button>
  //
  // <button onClick={() => this.handleDeleteClick(plant.id)} className="deleteButton">delete</button>

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
                <div className="skew-left"></div>
                <div className="skew-right"></div>

                <div className="display-plant-name">
                    <p>{plant.name}</p>


                    <BurgerTest plantId={plant.id}/>


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
