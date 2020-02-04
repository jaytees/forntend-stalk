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
import NavBar from './components/NavBar';

function StalkApp() {
  const [tokenHeaderSet, setTokenHeaderSet] = useState(false);



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
          <h1>Stalk App</h1>

          <NavBar setTokenHeader={ setTokenHeaderSet } tokenHeaderValue={tokenHeaderSet}/>



          <Switch>

            <Route exact path='/' component={Home}/>


            <Route exact path="/signup" render={(props) => <SignUp {...props} signUpComplete={setTokenHeaderSet} />} />


            {
              tokenHeaderSet &&
              <Route exact path='/profile' component={ProfilePage} />
            }

            <Route exact path='/users' component={Users} />
            <Route exact path='/mygarden/:user_id' component={MyGarden} />

            <Route exact path='/photo/:photo_id' component={Photo} />
          </Switch>
        </main>
      </div>
    )



}

export default StalkApp
