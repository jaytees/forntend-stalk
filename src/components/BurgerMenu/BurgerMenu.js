import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

import './BurgerMenu.css'

function BurgerMenu(props){
  // const [editRoute, setEditRoute] = useState('')
  let history = useHistory()


  const handleDeleteClick = ( id ) => {
    // console.log(id)
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }
    console.log('url', url);
    axios.delete(`${url}/plants/${id}.json`)
    .then(res => {
      // console.log(res);
    })
    .catch(console.warn)
  }

    const handleEditClick = ( plantID ) => {
        // console.log(plantID);
        const route = `/editplant/${ plantID }`
        console.log('route:', route);
        history.push( route )
    }

    const handleAddPhotoClick = ( plantID ) => {
      // console.log(plantID);
      const route = `/addphoto/${ plantID }`
      console.log('route:', route);
      history.push( route )
    }





  return(
    <div>
        <div id="menuToggle">

          <input type="checkbox" />


          <span></span>
          <span></span>
          <span></span>


          <ul id="menu">
            <li key='edit' onClick={() => handleEditClick(props.plantId)}>Edit</li>

            <li key='delete' onClick={() => handleDeleteClick(props.plantId)}>Delete</li>

            <li key='add' onClick={() => handleAddPhotoClick(props.plantId)}>Add Photo</li>

          </ul>
        </div>



    </div>


  )


}

export default BurgerMenu
