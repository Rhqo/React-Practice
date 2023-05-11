import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      Password: ''
    };

    this.handleID = this.handleID.bind(this);
    this.handlePW = this.handlePW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleID(event) {
    this.setState({Id: event.target.value});
  }
  handlePW(event) {
    this.setState({Password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state))
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
        </label>
        <input type="submit" class="w-100 btn btn-lg btn-primary mb-lg-5" value="Submit" />
      </form>
    );
  }
}

export default SigninForm;
