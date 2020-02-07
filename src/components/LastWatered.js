import React from 'react'
import axios from 'axios'

import './LastWatered.css'

function LastWatered(props){


  const timeSince = ( date ) => {
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

  const waterPlant = ( plant_id ) => {
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
        // console.log('props:', this.props.plant.last_watered);
        // const plantID = props.plant.id
        // const div = document.querySelector('#31')
        // console.log(div);

      }
    })
    .catch(err =>{
      console.warn('err:', err)
    })
  }
  //
  // <div className="waterInfoDisplay">
  //     {
  //       timeSince(new Date( props.plant.last_watered * 1000) ) === '0 seconds'
  //       ?
  //       'watered!'
  //       :
  //     <div className="waterInfoDisplay">
  //       <div id="droplet" onClick={() => waterPlant(props.plant.id)}></div>
  //         <p id={props.plant.id}>Last Watered {timeSince(new Date( props.plant.last_watered * 1000) )} Ago </p>
  //
  //     </div>
  //     }
  // </div>




  return(
    <div className='waterPlant'>
          {
            timeSince(new Date( props.plant.last_watered * 1000) ) === '0 seconds'
            ?
            'watered!'
            :
            <div>
              <div className='waterPlant-droplet'>
                <div className="droplet" onClick={() => waterPlant(props.plant.id)}></div>
              </div>

              <div className='waterPlant-text'>
                {
                <p id={props.plant.id}>Last Watered {timeSince(new Date( props.plant.last_watered * 1000) )} Ago </p>
                }
              </div>
            </div>
          }
    </div>

  )

}

export default LastWatered
