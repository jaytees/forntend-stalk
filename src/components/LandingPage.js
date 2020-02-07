import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import ReactDOM from 'react-dom';


class LandingPage extends React.Component {

  render(){
    return(
      <div className="landing-container">
          <div className="viewport-header text-focus-in">
            <h2><Link to='/home' className='home-link'> Stalk</Link></h2>
          </div>

            <video autoPlay loop muted>
              <source src="/flowers1080p.mp4" type="video/mp4" />
            </video>
      </div>
    );
  } // render
} // LandingPage

export default LandingPage;
