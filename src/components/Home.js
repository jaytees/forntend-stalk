import React from 'react'
import {Link} from 'react-router-dom'
import Users2 from './Users2'

class Home extends React.Component {

  render(){
    return(
      <div>

        <Users2 history={this.props.history}/>

      </div>
    )
  }

}

export default Home
