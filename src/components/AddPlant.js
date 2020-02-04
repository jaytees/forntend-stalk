import React from 'react'
import Upload from './Upload'

class AddPlant extends React.Component {

  //must be logged in to create a plant - render error if not logged in

  render(){
    return(
      <div className='App'>
        <h2>AddPlant</h2>
        <form action="">
          <div>
            <label>Plant Type</label><input type="text" name="planttype"/> <br/>
            <label>Name</label><input type="text" name="name"/> <br/>
            <label>About your plant:</label><input type="text" name="description"/> <br/>
            <label>Date Acquired</label><input type="date" name="date_acquired"/> <br/>
            <label>Days between watering</label><input type="text" name="water_days"/> <br/>
            <Upload />
            <input type="submit"/>

          </div>

        </form>
      </div>
    )
  }

} // Class

export default AddPlant
