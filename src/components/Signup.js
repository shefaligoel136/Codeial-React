import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">SignUp</span>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button>SignUp</button>
        </div>
      </form>
    );
  }
}

export default Signup;
