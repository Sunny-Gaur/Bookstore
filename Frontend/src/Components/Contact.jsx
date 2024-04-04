import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Login from './Login'
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data);
  return (

    <>
      <Navbar />
      <div className='flex items-center h-screen justify-center'>
        <div className='dark:text-white text-black'>
          <div className='box border-2 mt-10 p-3 pt-0 '>
            <h3 className='font-bold text-lg mb-3 mt-10 text-black dark:text-white '>Contact Us</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <span > Name</span> <br />
              <input type='name' placeholder='Enter your name' className=" bg-white text-black  md:w-80 px-3 rounded-md border-2 border-black outline-none dark:bg-slate-900 dark:text-white  dark:border-white mb-5 " {...register("name")} />
              <br />
              <span >Email</span> <br />
              <input type='email' placeholder='Enter your Email' className=" bg-white text-black  md:w-80 px-3 rounded-md border-2 border-black outline-none dark:bg-slate-900 dark:text-white  dark:border-white mb-5 " {...register("email")} />
              <br />
              <span >Message</span> <br />
              <textarea type="data" name="" id="" cols="40" rows="5" className=' dark:text-black bg-black text-white dark:bg-white border-2 border-black' {...register("data")}></textarea><br />
              <button type='submit' className='bg-secondary text-white rounded-md px-2 py-2'>Submit</button>
            </form>
          </div>
        </div>

      </div>
    </>


  )
}

export default Contact
