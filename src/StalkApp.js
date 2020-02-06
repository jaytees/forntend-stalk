import React, {useState, useEffect, useHistory} from 'react'
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './LoginForm'
import LogOut from './LogOut'
import SignUp from './SignUp'
import ProfilePage from './components/ProfilePage'
import Profile from './components/Profile'
import Users from './components/Users'
import Photo from './components/Photo'
import AddPlant from './components/AddPlant'
import Plant from './components/Plant'




function StalkApp() {
  const [tokenHeaderSet, setTokenHeaderSet] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('Please login or sign up');


  //check token and set auth header from it
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      console.log('TOKEN FOUND!', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setTokenHeaderSet( true );
    }

  }, []);


  //TODO: ternary for logout
    return(
      <div className="stalk-app">
        <main>
          <h1>Stalk App</h1>

          <p>{welcomeMessage}</p>


          {
            (tokenHeaderSet) ?
            <LogOut logOutComplete={ setTokenHeaderSet } logOutSuccess={setWelcomeMessage}/> :
            <div>
              <LoginForm loginComplete={ setTokenHeaderSet } loginSuccess={setWelcomeMessage} />

              <SignUp signUpComplete={ setTokenHeaderSet } />
          </div>
          }



          <Switch>

            <Route exact path='/' component={Home}/>
            {
              tokenHeaderSet &&
              <Route exact path='/profile' component={ProfilePage} />
            }
            <Route exact path='/users' component={Users} />
            <Route exact path='/profile/:user_id' component={Profile} />
            <Route exact path='/photo/:photo_id' component={Photo} />
            <Route exact path='/plant/:plant_id' component={Plant} />
            <Route exact path='/addplant' component={AddPlant} />
            <Route exact path='/uploadphoto' component={Photo} />

          </Switch>
        </main>
      </div>
    )



}

export default StalkApp
