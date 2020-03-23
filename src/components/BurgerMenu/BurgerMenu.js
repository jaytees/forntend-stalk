import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

import './BurgerMenu.css'

function BurgerMenu(props){
  let history = useHistory();


  const handleDeleteClick = ( id ) => {

    let url = '';
    if (process.env.NODE_ENV !== 'production') {
      url = 'http://localhost:3000';
    } else {
      url = 'https://backend-stalk.herokuapp.com';
    }


    axios.delete(`${url}/plants/${id}.json`)
    .then(res => {
      // console.log(res);
    })
    .catch( err => console.log(err));
  };

  const handleEditClick = ( plantID ) => {

      const route = `/editplant/${ plantID }`

      history.push( route )
  };


  const handleAddPhotoClick = ( plantID ) => {

    const route = `/addphoto/${ plantID }`

    history.push( route )
  }





  return(
    <div>
        <div id="menuToggle">

          <input type="checkbox" />


          <span className="forIcon"></span>
          <span className="forIcon"></span>
          <span className="forIcon"></span>


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
