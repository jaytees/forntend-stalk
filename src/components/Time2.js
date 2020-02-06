import React from 'react'
import axios from 'axios'

import './WaterInfo.css'

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
// var aDay = 24*60*60*1000;
// console.log(timeSince(new Date(Date.now()-aDay)));
// console.log(timeSince(new Date(Date.now()-aDay*2)));


class Time extends React.Component {

  state = {
    plants: [],
    watering: ''
  }

  waterPlant = ( plant_id ) => {
    // console.log('wateringPlant:', plant_id);
    // this.setState({watering: Math.floor(Date.now() / 1000)})
    // console.log(({last_watered: Math.floor(Date.now() / 1000)}));
    // console.log(this.state.watering);
    const lastWatered = (Math.floor(Date.now() / 1000))


    axios.put(`http://localhost:3000/plants/${plant_id}.json`, {
      plant: {
        last_watered: lastWatered
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('res:', res);
      if (res.status === 200) {
          //
          // this.props.plant.last_watered = 0
        console.log('props:', this.props.plant.last_watered);
      }
    })
    .catch(err =>{
      console.warn('err:', err)
    })
  }



  // componentDidMount(){
  //   axios.get(`http://localhost:3000/plants/${this.props.plantId}.json`)
  //   .then(res => {
  //     console.log('res from mout', res);
  //     this.setState({plants: res.data.plants})
  //     console.log('plants', this.state.plants);
  //     // console.log(timeSince(new Date(Date.now()-aDay*2)));
  //
  //     // console.log(this.state.user.plants.length);
  //   })
  //   .catch(console.warn)
  // }



  render(){
    return(
      <div className='waterPlant'>
            {


                  <div className="waterInfoDisplay">
                      {
                        timeSince(new Date( this.props.plant.last_watered * 1000) ) === '0 seconds'
                        ?
                        'watered!'
                        :
                      <div className="waterInfoDisplay">
                        <p>Last Watered {timeSince(new Date( this.props.plant.last_watered * 1000) )} Ago </p>

                        <img className="waterIcon" src="/water.png" alt="" onClick={() => this.waterPlant(this.props.plant.id)}/>
                      </div>
                      }
                  </div>

              }
        </div>

    ) //return
  } //render

} // Class

export default Time

// {timeSince(new Date( plant.last_watered * 1000) )} ago
