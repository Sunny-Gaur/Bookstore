import React from 'react'
import Home from './Home/Home'

import {Route,Routes} from "react-router-dom";
import Course from './Course/Course';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>



    </Routes>
   </>
  )
}

export default App
