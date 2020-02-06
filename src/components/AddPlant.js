import React from 'react'
import Upload from './Upload'
import axios from 'axios'

const userID = localStorage.getItem('userId')

class AddPlant extends React.Component {

  //must be logged in to create a plant - render error if not logged in
  state = {
    user_id: localStorage.getItem('userId'),
  }

  handleChange = ( evt ) => {
    this.setState({ [evt.target.name] : evt.target.value })
  }

  componentDidMount(){
    console.log('user_id:', userID);
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    // console.log(this.state);
    const plant = { plant:  this.state }
    console.log('plant', plant);
    axios.post('http://localhost:3000/plants.json', plant )
    .then(res => {
      console.log(`res:`, res);
      console.log('userID:', userID);
    })
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch(console.warn)
  } // end of handleSubmit

  handleSubmit = ( event ) => {
    event.preventDefault();
    // console.log(this.state);
    const plant = { plant:  this.state }
    console.log('plant', plant);
    axios.post('http://localhost:3000/plants.json', plant )
    .then(res => {
      console.log(`res:`, res);
      console.log('userID:', userID);
    })
    .then(this.props.history.push(`/mygarden/${userID}`))
    .catch(console.warn)
  } // end of handleSubmit

    render(){
    return(
      <div className='App'>
        <h2>AddPlant</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <label>Plant Type</label>
            <input type="text" name="planttype" onChange={this.handleChange}/> <br/>

            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange}/> <br/>

            <label>About your plant:</label>
            <input type="text" name="description" onChange={this.handleChange}/> <br/>

            <label>Date Acquired</label>
            <input type="date" name="date_acquired" onChange={this.handleChange}/> <br/>

            <label>Days between watering</label>
            <input type="text" name="water_days" onChange={this.handleChange}/> <br/>

            <Upload />

            <input type="submit"/>
        </form>
      </div>
    )
  }

} // Class

export default AddPlant
