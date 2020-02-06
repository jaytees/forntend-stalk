import React, {useState, useEffect, createRef} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

import './components/NavBar/NavBar.css'
import './Main.css'

import Home from './components/Home';
import SignUp from './SignUp';
import ProfilePage from './components/ProfilePage';
import MyGarden from './components/GardenDisplay/MyGarden';
import Users from './components/Users';
import Photo from './components/Photo';
import AddPlant from './components/AddPlant';
import EditPlant from './components/EditPlant';
import Upload from './components/Upload';
import NavBar from './components/NavBar/NavBar';
import PlantCalendar from './components/PlantCalendar';
import AddPhoto from './components/AddPhoto';
import EditPhoto from './components/EditPhoto';
import Following from './components/Following';
import Plant from './components/Plant';
import Time from './components/Time'


function StalkApp() {
  const [tokenHeaderSet, setTokenHeaderSet] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome, please login or sign up');

  const myRef = React.createRef();
  const [scrollTop, setScrollTop] = useState(0)

  const [baseWidth, setBaseWidth] = useState(100)



  const handleUserStatus = (tokenValue, name) => {

    if ( tokenValue) {
      setWelcomeMessage(`Welcome back, ${name}`)
      setTokenHeaderSet(true)
    } else {
      setWelcomeMessage('Welcome, Please login or sign up')
      setTokenHeaderSet(false)
    }
  }

  //check token and set auth header from it
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      // console.log('TOKEN FOUND!', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setTokenHeaderSet( true );
    
    }

  }, []);


    const navAnimation = (merge) => {

      // console.log('trigger'):
      const mainLogoElem = document.querySelector('#main-logo');
      const navbarLogoElem = document.querySelector('#navbar-logo');
//
// yId("p2").className = "classname"


      if (merge) {
        // console.log('mergeAnimation')




        // mainLogoElem.style.visibility = 'hidden';
        mainLogoElem.className = 'nav-animate-out';
        navbarLogoElem.style.visibility = 'visible';



      } else {
        //unmerge
        // console.log('unmerge animation')

        // mainLogoElem.style.visibility = 'visible';
        mainLogoElem.className = 'nav-animate-back';
        navbarLogoElem.style.visibility = 'hidden';

      }

    }

    const onScroll = () => {
      const scrollTop = myRef.current.scrollTop;
      // console.log(`myRef.scrollTop: ${scrollTop} `)
      setScrollTop(scrollTop);

      // console.log('scrollTop', scrollTop)


          if (scrollTop >= 80) {
              // console.log('merge')

              navAnimation(true);

          } else if (scrollTop <= 110) {
              // console.log('unMerge')
              navAnimation();

          } //nested if


    } //onscroll





    return(

      <div className="stalk-app">
        <main>

            <div id="main-wrapper"
              ref={myRef}
              onScroll={onScroll}
              >

                  <div id="main-logo">
                    <h1 id="logo">Stalk</h1>
                  </div>

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


                  <Route exact path='/users' component={Users}/>

                  <Route exact path='/mygarden/:user_id' component={MyGarden} />

                  <Route exact path='/plantcalendar/:user_id' component={PlantCalendar} />



            <Route exact path='/photo/:photo_id' component={Photo} />
            <Route exact path='/time/' component={Time} />
            <Route exact path='/addplant/' component={AddPlant} />
            <Route exact path='/editplant/:plant_id' component={EditPlant} />
            <Route exact path='/addphoto/:plant_id' component={AddPhoto} />
            <Route exact path='/editphoto/:photo_id' component={EditPhoto} />
            <Route exact path='/following/' component={Following} />
            <Route exact path='/plant/:plant_id' component={Plant} />
            <Route exact path='/uploadphoto' component={Photo} />
          </Switch>

          </div>
        </main>
      </div>

    )



}

export default StalkApp
