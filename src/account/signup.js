import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState({
    value: '',
    class: 'form-control',
    style: { color: '' }
  });
  const [btn, setBtn] = useState({
    value: 'Disabled',
    class: 'w-100 btn btn-lg btn-primary mb-lg-5 disabled'
  });

  const handleID = (event) => {
    setId(event.target.value);
  };

  const handlePW = (event) => {
    setPassword(event.target.value);
  };

  const handleVerifyPW = (event) => {
    setVerifyPassword((prevState) => ({
      ...prevState,
      value: event.target.value
    }));
  };

  const handleBtn = (event) => {
    setBtn((prevState) => ({
      ...prevState,
      value: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify({ id, password, verifyPassword }));
  };

  useEffect (() => {
    if (password === '' && verifyPassword.value === ''){
      setBtn({value: 'Disabled', class: 'w-100 btn btn-lg btn-primary mb-lg-5 disabled'});
      setVerifyPassword({value:verifyPassword.value, class: 'form-control', style: { color: '' }});
    }
    else if (password === verifyPassword.value) {
      setBtn({value: 'Create Account!', class: 'w-100 btn btn-lg btn-primary mb-lg-5 active'});
      setVerifyPassword({value: verifyPassword.value, class: 'form-control is-valid', style: { color: 'green' }});
    } else {
      setBtn({value: 'Disabled', class: 'w-100 btn btn-lg btn-primary mb-lg-5 disabled'});
      setVerifyPassword({value: verifyPassword.value, class: 'form-control is-invalid', style: { color: 'red' }});
    }
  }, [password, verifyPassword]);


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        <div className="form-floating">
          <input type="ID" placeholder="ID" className="form-control" value={id} onChange={handleID} />
          <label htmlFor="floatingInput">ID</label>
        </div>
        <div className="form-floating">
          <input type="password" placeholder="Password" className="form-control" value={password} onChange={handlePW} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" placeholder="Verify Password" className={verifyPassword.class} value={verifyPassword.value} style={verifyPassword.style} onChange={handleVerifyPW} />
          <label htmlFor="floatingPassword">Verify Password</label>
        </div>
      </label>
      <input type="submit" className={btn.class} value={btn.value} onChange={handleBtn} />
    </form>
  );
}

export default SignupForm;