import React from 'react'
import axios from 'axios'
const userID = localStorage.getItem('userId')

class Following extends React.Component {
  state = {
    user: [],
    userfollows: []
  }

  handleClick = ( id ) => {

    const route = `/photo/${ id }`

    this.props.history.push( route )
  }


  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token){
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }

    axios.get(`${url}/users/${userID}.json`)
      .then(res => {
        this.setState({user: res.data})

      })
      .catch(err => console.warn(err))

    axios.get(`${url}/follows/${userID}.json`)
      .then(res => {

        this.setState({userfollows: res.data})
      })
      .catch(err => console.warn(err))

  }; //componentDidMount

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
                      <img className="myGardenPlantPhoto" src={photo.image} alt="plant"/>
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
