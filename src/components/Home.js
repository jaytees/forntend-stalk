import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {

  render(){
    return(
      <div>
      <h2>Home Page</h2>
      <Link to='/users'>users</Link>
      </div>
    )
  }

}

export default Home
