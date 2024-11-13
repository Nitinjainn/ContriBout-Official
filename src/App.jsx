import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import React from "react";
import Home from './Pages/Home';
import Login from './Components/Login';
import Signup from "./Components/SignUp";
import Profile from "./Components/Profile";
import DonationPage from "./Components/DonationPage";
import HowItWorks from "./Components/HowItWorks";
import CreateCommunity from "./Components/CreateCommunity";
import CommunityCards from "./Components/CommunityCards";


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
          <Route path='/CommunityCards' element = {<CommunityCards/>}/>
          <Route path='/CreateCommunity' element = {<CreateCommunity/>}/>
        </Routes>
      </div>
    </Router>
  )

}

export default App
