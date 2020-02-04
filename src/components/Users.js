import React from 'react'
import axios from 'axios'


class Users extends React.Component {

  state = {
    users: []
  }

  handleClick = ( id ) => {
    console.log(id);
    const route = `/profile/${ id }`
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
        <h2>Users</h2>
          {
            this.state.users.length === 0
            ?
            <p>no users</p>
            :
            this.state.users.map( user =>
              <div onClick={() => this.handleClick(user.id)}>
                <span>{user.username} - {user.plants.length} plants</span><br/>
                <div className="userIndexPlants">
                  {
                    user.plants.map( plant =>
                      <div className="indexPlants">
                        {plant.name} - {plant.planttype}
                        <img className="indexPlantPhoto" src={plant.photos[0].image} alt=""/>
                        {
                          // loopthrough all photos
                          // plant.photos.map( photo =>
                          // <div>
                          //   <img src={photo.image} className="indexPlantPhoto" />
                          // </div>)
                      }
                      </div>
                  )
                  }
                </div>
              </div>
            )
          }
      </div>
    )
  }

} // Class

export default Users
