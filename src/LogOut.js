import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './components/NavBar/NavBar.css';

function LogOut(props) {
  let history = useHistory()

  const logOutSubmit = () =>{

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    delete axios.defaults.headers.common['Authorization'];

    props.logOutMessage( false, 'Please login or sign up' );

    history.push('/home')

  }

  return(
    <p onClick={logOutSubmit} id="logOut-link">Log Out</p>
  )

}

export default LogOut
