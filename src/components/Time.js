import React from 'react'
import axios from 'axios'

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
var aDay = 24*60*60*1000;
// console.log(timeSince(new Date(Date.now()-aDay)));
// console.log(timeSince(new Date(Date.now()-aDay*2)));


class Time extends React.Component {

  state = {
    plants: [],
    watering: ''
  }

  waterPlant = ( plant_id, plantIndex ) => {
    console.log('wateringPlant:', plant_id);
    // this.setState({watering: Math.floor(Date.now() / 1000)})
    console.log(({last_watered: Math.floor(Date.now() / 1000)}));
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
        const plantsCopy = [...this.state.plants];
        plantsCopy[plantIndex].last_watered = lastWatered
        this.setState({plants: plantsCopy});
      }
    })
    .catch(err =>{
      console.warn('err:', err)
    })
  }



  componentDidMount(){
    axios.get(`http://localhost:3000/plants.json`)
    .then(res => {
      this.setState({plants: res.data.plants})
      console.log('plants', this.state.plants);
      // console.log(timeSince(new Date(Date.now()-aDay*2)));

      // console.log(this.state.user.plants.length);
    })
    .catch(console.warn)
  }



  render(){
    return(
      <div className='App'>
        <h1>Time</h1>
        <h2>become a master of time and space</h2>
          {
            this.state.plants.length === 0
            ?
            <p>time is over</p>
            :
            <div>
            <p>time is complete</p>
            {
            this.state.plants.map( (plant, index) =>
              <div key={`plant${plant.id}`} className="gardenPlantIndex">
                <div className="skew-left"></div>
                <div className="skew-right"></div>
                <div className="display-plant-name">
                <p>{plant.name}</p>
                </div>

                {
                  plant.photos.map( photo =>
                    <div key={`photo${photo.id}`} className="image-box" onClick={() => this.handleClick(photo.id)}>
                      <img className="myGardenPlantPhoto" src={photo.image}/>
                    </div>
                  )
                }


                <p>  //shows me lastWatered text
                  {
                    timeSince(new Date( plant.last_watered * 1000) ) === '0 seconds'
                    ?
                    'watered!'
                    :
                    <p>Last Watered {timeSince(new Date( plant.last_watered * 1000) )} Hours Ago </p>
                  }
                </p>



                <div onClick={() => this.waterPlant(plant.id, index)} className="waterPlant">
                <img src="/water.png" alt=""/>
                </div>
              </div>
              )
            }
            </div>
          }
      </div>
    )
  }

} // Class

export default Time

// {timeSince(new Date( plant.last_watered * 1000) )} ago
