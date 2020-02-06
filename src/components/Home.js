import React from 'react'
import {Link} from 'react-router-dom'
import Users from './Users'

class Home extends React.Component {

  render(){
    return(
      <div>
      <h2>Home Page</h2>

        <Users history={this.props.history}/>

      </div>
    )
  }

}

export default Home
