import React from "react";
import HomePage from "./home/HomePage";
import SignPage from "./account/SignPage";
import MemoPage from "./memo/MemoListPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/*" element={<SignPage />}/>
        <Route path="memo" element={<MemoPage />}/>
        <Route />
      </Routes>
    </>
  )
}

export default App;