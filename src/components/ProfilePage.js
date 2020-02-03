import React from 'react';
import axios from 'axios';
import PlantCalendar from './PlantCalendar';


class ProfilePage extends React.Component {
  state = {
    id: localStorage.getItem('userId'),
    user: {}
  }


  componentDidMount(){

    // console.log('HEADERS', axios.defaults.headers.common);
    // this.setState({id: localStorage.getItem('userId')})


      axios.get(`http://localhost:3000/users/${this.state.id}.json`)
      .then( res => {
        // console.log(res)
        this.setState({user: res.data})
      });

  }



  render(){
    return(

      <div>
        <h2>Profile Page for {this.state.user.name}</h2>

          <PlantCalendar />
        </div>

    );
  }

}

export default ProfilePage;
