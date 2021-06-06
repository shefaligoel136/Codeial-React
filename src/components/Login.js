import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: ''
    }
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
  }

  handleLoginForm = (e) => {
    e.preventDefault();
    console.log('this.state',this.state);
    // console.log('this.emailInputRef', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
  };

  handleEmailChange = (e) => {
    this.setState({
      email : e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password : e.target.value
    })
  }

  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            onChange = {this.handleEmailChange}
            value = {this.state.email}
            required
            // ref={this.emailInputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            onChange = {this.handlePasswordChange}
            value = {this.state.password}
            required
            ref={this.passwordInputRef}
          />
        </div>
        <div className="field">
          <button onClick={this.handleLoginForm}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
