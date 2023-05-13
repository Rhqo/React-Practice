import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SigninForm() {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');

  const handleID = (event) => {
    setId(event.target.value);
  }
  const handlePW = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify({ Id, Password }))
  }

    return (
      <form class="login-form" onSubmit={handleSubmit}>
        <label>
          <div class="form-floating">
            <input type="ID" placeholder='ID' class="form-control" value={Id} onChange={handleID} />
            <label for="floatingInput">ID</label>
          </div>
          <div class="form-floating">
            <input type="password" placeholder='Password' class="form-control" value={Password} onChange={handlePW} />
            <label for="floatingPassword">Password</label>
          </div>
        </label>
        <input type="submit" class="w-100 btn btn-lg btn-primary mb-lg-5" value="Submit" />
      </form>
    );
}

export default SigninForm;
