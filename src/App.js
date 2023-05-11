import React from "react";
import HomePage from "./home/HomePage";
import SigninPage from "./account/SigninPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/account/signin" Component={SigninPage}/>
        <Route path="/account/signup" Component={SigninPage}/>
        <Route />
      </Routes>
    </>
  )
}

export default App;