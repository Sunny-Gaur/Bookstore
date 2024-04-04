import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <div className='flex items-center h-screen justify-center'>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <div className='w-[600px]'>
                    <div id="my_modal_3" className="md:p-10 rounded-md ">
                        <div className="border-2 px-5 py-5 dark:bg-slate-900 dark:text-white  text-black bg-white">

                            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                {/* if there is a button in form, it will close the modal */}
                                <Link to="/"> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
                                <h3 className="font-bold text-lg mb-10">Sign UP</h3>
                                <span className=''>Name<sup className='text-red-900'>*</sup></span>
                                <br />
                                <input type="name" placeholder='Enter your Name' className='  bg-white text-black  md:w-80 px-3 rounded-md border-2 border-black outline-none dark:bg-slate-900 dark:text-white  dark:border-white mb-5 '  {...register("name", { required: true })} />
                                <br />
                                {errors.name && <span className='text-red-900 text-sm'>This field is required</span>}
                                <br />
                                <span className=''>Email<sup className='text-red-900'>*</sup></span>
                                <br />
                                <input type="email" placeholder='Enter your Email' className=' bg-white text-black  md:w-80 px-3 rounded-md border-2 border-black outline-none dark:bg-slate-900 dark:text-white  dark:border-white '{...register("email", { required: true })} /> <br />
                                {errors.email && <span className='text-red-900 text-sm'>This field is required</span>}

                                <div className='mt-1'>
                                    <br />
                                    <span>Password <sup className="text-red-900">*</sup></span>
                                    <br />
                                    <input type="password" placeholder='Enter your Password' className=' bg-white text-black md:w-80 px-3 rounded-md border-2 border-black outline-none  dark:bg-slate-900 dark:text-white dark:border-white' {...register("password", { required: true })} />
                                    <br />
                                    {errors.password && <span className='text-red-900 text-sm'>This field is required</span>}

                                </div>

                            <div className='flex justify-between mt-9'>
                                <button className='btn btn-secondary  rounded-md dark:text-white '>Signup</button>
                                <p>Have account?
                                    <button className=' underline text-blue-600' onClick={() =>
                                        document.getElementById("my_modal_2").showModal()
                                    }>Login</button>{" "}
                                    <Login />
                                </p>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
