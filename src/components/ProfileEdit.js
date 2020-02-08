import React from 'react';
import axios from 'axios';
import './../SignUp.css'

class ProfileEdit extends React.Component{

  state = {
    name: 'Test User',
    username: 'testuser',
    location: 'Sydney',
    email: 'test@test.com',
    password: 'chicken',
    password_confirmation: 'chicken'
  };

  handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    this.setState({[name]: newValue});

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')

    axios.patch('http://localhost:3000/users')
    .then(res => {
      console.log(`res:`, res);
    })
    .then( console.log('this.props.match.params.user_id', this.props.match.params.user_id) )
    .catch(console.warn)
  }

  render(){
    return(

      <div className="formContainer">

        <h2 class="formTitle">Edit Profile</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Name:</label>
              <br/>
              <input defaultValue={this.state.name} onChange={this.handleChange} type="text" name="name" placeholder="name"/>
            </div>
            <br/>

            <div className="field">
              <label>Username:</label>
              <br/>
              <input defaultValue={this.state.username} onChange={this.handleChange} type="text" name="username" placeholder="username"/>
            </div>
            <br/>

            <div className="field">
              <label>Location:</label>
              <br/>
              <input defaultValue={this.state.location} onChange={this.handleChange} type="text" name="location" placeholder="location"/>
            </div>
            <br/>

            <div className="field">
              <label>Email:</label>
              <br/>
              <input defaultValue={this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="email"/>
            </div>
            <br/>

            <div className="field">
              <label>Password:</label>
              <br/>
              <input defaultValue={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="password"/>
            </div>
            <br/>

            <div className="field">
              <label>Password Confirmation:</label>
              <br/>
              <input defaultValue={this.state.password_confirmation} onChange={this.handleChange} type="password" name="password_confirmation" placeholder="password confirmation"/>
            </div>
            <br/>

            <button className="formButton" type="submit">Submit</button>
          </form>

    </div>
    )
  }

}

export default ProfileEdit;
