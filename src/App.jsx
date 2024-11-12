import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import React from "react";
import Home from './Pages/Home';
import Login from './Components/Login';
import Signup from "./Components/SignUp";
import Profile from "./Components/Profile";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/signup' element = { <Signup/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Profile' element = {<Profile/>}/>
        </Routes>
      </div>
    </Router>
    // <>
    //   <Navbar/>    
    //   <Body/>
    //   <Badges/>
    //   <Feature/>
    //   <Next/>
    //   <FAQSection/>
    //   <Trusted/>
    //   <Footer/>
    // </>
  )

}

export default App
