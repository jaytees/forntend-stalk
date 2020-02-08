import React from 'react';
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

  render(){
    return(

      <div className="formContainer">

        <h2 class="formTitle">Edit Profile</h2>

          <form /* onSubmit={handleSubmit}*/>
            <div className="field">
              <label>Name:</label>
              <br/>
              <input value={this.name} /*onChange={handleChange}*/ type="text" name="name" placeholder="name"/>
            </div>
            <br/>

            <div className="field">
              <label>Username:</label>
              <br/>
              <input value={this.username} /*onChange={handleChange}*/ type="text" name="username" placeholder="username"/>
            </div>
            <br/>

            <div className="field">
              <label>Location:</label>
              <br/>
              <input value={this.location} /*onChange={handleChange}*/ type="text" name="location" placeholder="location"/>
            </div>
            <br/>

            <div className="field">
              <label>Email:</label>
              <br/>
              <input value={this.email} /*onChange={handleChange}*/ type="text" name="email" placeholder="email"/>
            </div>
            <br/>

            <div className="field">
              <label>Password:</label>
              <br/>
              <input value={this.password} /*onChange={handleChange}*/ type="password" name="password" placeholder="password"/>
            </div>
            <br/>

            <div className="field">
              <label>Password Confirmation:</label>
              <br/>
              <input value={this.password_confirmation} /*onChange={handleChange}*/ type="password" name="password_confirmation" placeholder="password confirmation"/>
            </div>
            <br/>

            <button className="formButton" type="submit">Submit</button>
          </form>

    </div>
    )
  }

}

export default ProfileEdit;
