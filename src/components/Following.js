import React from 'react'
import axios from 'axios'
const userID = localStorage.getItem('userId')

class Following extends React.Component {

  handleClick = ( id ) => {
    console.log(id);
    const route = `/photo/${ id }`
    console.log('route:', route);
    this.props.history.push( route )
}
  state = {
    user: [],
    userfollows: []
  }


  componentDidMount(){
    const token = localStorage.getItem('token')
    console.log(userID)
    // console.log(`userID`, userID);
    if (token){
      console.log('TOKEN FOUND!', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // setTokenHeaderSet( true );
    }
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.get(`${url}/users/${userID}.json`)
    .then(res => {
      this.setState({user: res.data})
      console.log('this.state.user', this.state.user);
      console.log(this.state.user.plants.length);
    })
    .catch(console.warn)
    console.log(`userID`, userID);
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.get(`${url}/follows/${userID}.json`)
    // axios.get(`http://localhost:3000/users/${userID}.json`)
    .then(res => {
      console.log(res);
      this.setState({userfollows: res.data})
      // console.log('this.state.user', this.state.user);
      // console.log(this.state.user.plants.length);
    })
    .catch(console.warn)
  }

  render(){
    return(
      <div className='App'>
        <h2>Following</h2>
        <p></p>
        {
          this.state.userfollows.length === 0
          ?
          <p>loading</p>
          :
          <div>
          {
            this.state.userfollows.userfollows.map( follow =>

              <div key={follow.id} className="gardenPlantIndex">
                <div className="skew-left"></div>
                <div className="skew-right"></div>

                  <div className="display-plant-name">
                  <p>{follow.name}</p>
                  </div>

                {
                  follow.photos.map( photo =>
                    <div className="image-box" key={photo.id} onClick={() => this.handleClick(photo.id)}>
                      <img className="myGardenPlantPhoto" src={photo.image} />
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

export default Following
