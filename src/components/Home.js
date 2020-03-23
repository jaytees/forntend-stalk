import React from 'react'
import Users from './Users'

class Home extends React.Component {

  render(){
    return(
      <div>

        <Users history={this.props.history}/>

      </div>
    )
  }

}

export default Home
