import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import moment from 'moment';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


// let plants = ''

class ProfilePage extends React.Component {
  state = {
    id: localStorage.getItem('userId'),
    user: [],
    // notifState: false;
  }



  componentDidMount(){

    // console.log('HEADERS', axios.defaults.headers.common);
    // this.setState({id: localStorage.getItem('userId')})


      axios.get(`http://localhost:3000/users/${this.state.id}.json`)
      .then( res => {
        // const { addToast } = useToasts();
        console.log('res', res)
        this.setState({user: res.data})
        console.log(`plants`, this.state.user.plants)

        const currentDate = moment().hours(0).minutes(0).seconds(0);

        this.state.user.plants.forEach(plant => {
          let acquiredDate = moment(plant.date_acquired);
          if (currentDate.diff(acquiredDate,'days') % plant.water_days === 0) {
              store.addNotification({
              title: "Water me!",
              message: `I am ${plant.name}`,
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              dismiss: {
                duration: 10000,
                onScreen: true
              }
            });
          }
        });
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
        <h2>Profile Page for {this.state.user.name}</h2>
        <Link to='/users'>Check Out Other Stalkers</Link> <br/>
        <Link to='/addplant/'>Add A New Plant</Link><br/>
        <Link to='/following/'>Check out the plants you're following</Link><br/>
        <Link to={`/mygarden/${this.state.user.id}`}>View Your Garden</Link><br/>
        <Link to={`/plantcalendar/${this.state.user.id}`}>Calendar</Link><br/>


        </div>


    );
  }

}

export default ProfilePage
