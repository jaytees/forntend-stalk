import React from 'react'
import axios from 'axios'

const plantID = ''
const userID = localStorage.getItem('userId')


class EditPlant extends React.Component {

  //must be logged in to create a plant - render error if not logged in
  state = {
    user_id: localStorage.getItem('userId'),
    plant: []
  }

  handleChange = ( evt ) => {
    this.setState({ [evt.target.name] : evt.target.value })
  }

  componentDidMount(){
    let plantID = this.props.match.params.plant_id
    console.log(`plantID`, plantID);
    axios.get(`http://localhost:3000/plants/${plantID}.json`)
    .then(res => {
      const plantInfo = res.data
      this.setState({ plant: plantInfo })
      console.log(this.state.plant);
      console.log(this.state.plant.length);
    })
    .catch(console.warn)
  }

  handleSubmit = ( event ) => {
    let plantID = this.props.match.params.plant_id
    event.preventDefault();
    console.log(this.state);
    const plant = this.state
    console.log('plant', plant);
    axios.put(`http://localhost:3000/plants/${plantID}.json`, {
      plant
    })
    .then(res => {
      console.log(`res:`, res);
    })
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch(console.warn)
  } // end of handleSubmit

  render(){
    return(
      <div className='formContainer'>
        <h2 className="formTitle">Edit {this.state.plant.name}</h2>
        {
          this.state.plant.length === 0
          ?
          'no'
          :
          <div></div>
        }
        <form action="" onSubmit={this.handleSubmit}>
            <label>Plant Type</label>
            <input type="text" name="planttype" defaultValue={this.state.plant.planttype} onChange={this.handleChange}/> <br/>

            <label>Name</label>
            <input type="text" name="name" defaultValue={this.state.plant.name} onChange={this.handleChange}/> <br/>

            <label>About your plant:</label>
            <input type="text" name="description" defaultValue={this.state.plant.description} onChange={this.handleChange}/> <br/>

            <label>Date Acquired</label>
            <input type="date" name="date_acquired" defaultValue={this.state.plant.date_acquired} onChange={this.handleChange}/> <br/>

            <label>Days between watering</label>
            <input type="text" name="water_days" defaultValue={this.state.plant.water_days} onChange={this.handleChange}/> <br/>

            <input className="formButton" type="submit"/>
        </form>
      </div>
    )
  }

} // Class

export default EditPlant
