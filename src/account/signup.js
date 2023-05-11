import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      Password: '',
      VerifyPassword: ''
    };

    this.handleID = this.handleID.bind(this);
    this.handlePW = this.handlePW.bind(this);
    this.handleVerifyPW = this.handleVerifyPW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleID(event) {
    this.setState({Id: event.target.value});
  }
  handlePW(event) {
    this.setState({Password: event.target.value});
  }
  handleVerifyPW(event) {
    this.setState({VerifyPassword: event.target.value});
    if (this.state.Password === event.target.value) {
      document.getElementById('btn').value = 'Create Account!'
      document.getElementById('btn').classList.remove('disabled');
      document.getElementById('vpw').classList.remove('is-invalid');
      document.getElementById('vpw').classList.add('is-valid');
      document.getElementById('vpw').style.color='green';
    }
    else {
      document.getElementById('btn').value = 'Disabled'
      document.getElementById('btn').classList.add('disabled');
      document.getElementById('vpw').classList.remove('is-valid');
      document.getElementById('vpw').classList.add('is-invalid');
      document.getElementById('vpw').style.color='red';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }
  
  render() {
    return (
      <form class="login-form" onSubmit={this.handleSubmit}>
        <label>
          <div class="form-floating">
            <input type="ID" placeholder='ID' class="form-control" value={this.state.Id} onChange={this.handleID} />
            <label for="floatingInput">ID</label>
          </div>
          <div class="form-floating">
            <input type="password" placeholder='Password' class="form-control" value={this.state.Password} onChange={this.handlePW} />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input type="password" id='vpw' placeholder='Verify Password' class="form-control" value={this.state.VerifyPassword} onChange={this.handleVerifyPW} />
            <label for="floatingPassword">Verify Password</label>
          </div>
        </label>
        <input type="submit" id='btn' class="w-100 btn btn-lg btn-primary mb-lg-5 disabled" value="Disabled" />
      </form>
    );
  }
}

export default SigninForm;