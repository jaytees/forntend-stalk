import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import SignUp from './SignUp';
import ProfilePage from './components/ProfilePage';
import MyGarden from './components/MyGarden';
import Users from './components/Users';
import Photo from './components/Photo';
import AddPlant from './components/AddPlant';
import NavBar from './components/NavBar/NavBar';
import Time from './components/Time'

function StalkApp() {
  const [tokenHeaderSet, setTokenHeaderSet] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('Please login or sign up');


  const handleUserStatus = (tokenValue, name) => {

    if ( tokenValue) {
      setWelcomeMessage(`Welcome back, ${name}`)
      setTokenHeaderSet(true)
    } else {
      setWelcomeMessage('Please login or sign up')
      setTokenHeaderSet(false)
    }
  }

  //check token and set auth header from it
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      console.log('TOKEN FOUND!', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setTokenHeaderSet( true );
    }

  }, []);

    // <SignUp signUpComplete={ props.setTokenHeader } />

    return(
      <div className="stalk-app">
        <main>

          <NavBar tokenHeaderValue={tokenHeaderSet} messageCreator={handleUserStatus}
          navMessage={welcomeMessage} />



          <Switch>

            <Route exact path='/' component={Home}/>


            <Route exact path="/signup" render={(props) => <SignUp {...props}
            messageCreator={handleUserStatus}  />} />


            {
              tokenHeaderSet &&
              <Route exact path='/profile' component={ProfilePage} />
            }

            <Route exact path='/users' component={Users} />
            <Route exact path='/mygarden/:user_id' component={MyGarden} />

            <Route exact path='/photo/:photo_id' component={Photo} />
            <Route exact path='/time/' component={Time} />
            <Route exact path='/addplant/' component={AddPlant} />
          </Switch>
        </main>
      </div>
    )



}

export default StalkApp
