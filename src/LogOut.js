import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


function LogOut(props) {
  let history = useHistory()

  const logOutSubmit = () =>{

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    delete axios.defaults.headers.common['Authorization'];
    props.logOutComplete( false );
    props.logOutSuccess( 'Please login or sign up' );

    history.push('/')

  }

  return(
    <button onClick={logOutSubmit}>Log Out</button>
  )

}

export default LogOut
