import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PlantCalendar from './PlantCalendar';


let plants = ''

class ProfilePage extends React.Component {
  state = {
    id: localStorage.getItem('userId'),
    user: []
  }




  componentDidMount(){

    // console.log('HEADERS', axios.defaults.headers.common);
    // this.setState({id: localStorage.getItem('userId')})


      axios.get(`http://localhost:3000/users/${this.state.id}.json`)
      .then( res => {
        console.log('res', res)
        this.setState({user: res.data})
        console.log(`plants`, this.state.user.plants)
      });

  }



  render(){
    return(

        <div>
        <h2>Profile Page for {this.state.user.name}</h2>
        <Link to='/users'>check out the other stalkers!</Link> <br/>
        <Link to='/profile/64/'>check in on your plants!</Link> <br/>
        <Link to='/addplant/'>add a new plant!</Link>
        <div onClick={() => this.handleClick(this.state.user.id)}>
          go to your profile
        </div>
        <PlantCalendar />
        </div>


    );
  }

}

export default ProfilePage
