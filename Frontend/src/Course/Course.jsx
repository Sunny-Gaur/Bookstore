import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Courses from '../Components/Courses'

function Course() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen '>
    <Courses/>
    </div>
    <Footer/>
    </>
  )
}

export default Course
