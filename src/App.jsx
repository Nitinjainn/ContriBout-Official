import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import React from "react";
import Home from './Pages/Home';
import Login from './Components/Login';
import Signup from "./Components/SignUp";
import Profile from "./Components/Profile";
import DonationPage from "./Components/DonationPage";
import HowItWorks from "./Components/HowItWorks";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/signup' element = { <Signup/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Profile' element = {<Profile/>}/>
          <Route path='/DonationPage' element = {<DonationPage/>}/>
          <Route path='/HowItWorks' element = {<HowItWorks/>}/>
        </Routes>
      </div>
    </Router>
  )

}

export default App
