import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';


// let plants = ''

class ProfilePage extends React.Component {
  state = {
    id: localStorage.getItem('userId'),
    user: []
  }




  componentDidMount(){

    // console.log('HEADERS', axios.defaults.headers.common);
    // this.setState({id: localStorage.getItem('userId')})

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
      axios.get(`${url}/users/${this.state.id}.json`)
      // axios.get(`http://localhost:3000/users/${this.state.id}.json`)
      .then( res => {
        console.log('res', res)
        this.setState({user: res.data})
        console.log(`plants`, this.state.user.plants)
      });

  }

  handleClick = ( id ) => {
    console.log(id);
    const route = `/mygarden/${ id }`
    console.log('route', route);
    this.props.history.push( route )
  }



  render(){
    return(
      <div>
      <h2 className="centered">Profile Page for {this.state.user.name}</h2>
      <div className="profileButtons">
      <Link to='/users'><div className="profileButton slide-top">STALKERS</div></Link>
      <Link to='/addplant'><div className="profileButton slide-top">+PLANT</div></Link>
      <Link to={`/mygarden/${this.state.user.id}`}><div className="profileButton slide-top">MY GARDEN</div></Link>
      <Link to={`/plantcalendar/${this.state.user.id}`}><div className="profileButton slide-top">CALENDAR</div></Link>
      </div>
      </div>

    );
  }

}

export default ProfilePage


// <Link to='/users'>Check Out Other Stalkers</Link> <br/>
// <Link to='/addplant/'>Add A New Plant</Link><br/>
// <Link to='/following/'>Check out the plants you're following</Link><br/>
// <Link to={`/mygarden/${this.state.user.id}`}>View Your Garden</Link><br/>
// <Link to={`/plantcalendar/${this.state.user.id}`}>Calendar</Link><br/>
//
