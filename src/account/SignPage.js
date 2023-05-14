import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import SigninForm from './signin';
import SignupForm from './signup';
import './sign.css';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Sign = () => {
  const location = useLocation().pathname;
  let title, context;
  if(location === '/account/signin') {
    title = "Sign in";
    context = <SigninForm />;
  }
  else if (location === '/account/signup'){
    title = "Sign up";
    context = <SignupForm />;
  }
  else {
    title = "404 Not Found";
  }
  
  return (
    <>
    <div>
      <Header />
        <div class="col-lg-8 mx-auto mt-4 p-4 py-md-5">
        <span class="login-box">{title}</span>
        <main class="main-box">
          {context}
        </main>
        </div>
      <Footer />
    </div>
    </>
  );
}


export default Sign;