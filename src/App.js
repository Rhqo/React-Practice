import React from "react";
import HomePage from "./home/HomePage";
import SignPage from "./account/SignPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/account/signin" Component={SignPage}/>
        <Route path="/account/signup" Component={SignPage}/>
        <Route />
      </Routes>
    </>
  )
}

export default App;