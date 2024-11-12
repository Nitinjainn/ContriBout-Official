import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import React from "react";
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/Login' element = {<Login/>}/>
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
