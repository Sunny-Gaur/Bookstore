import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white bg-white text-black">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"}> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.querySelector("#my_modal_2").close()}>✕</button></Link>
          <h3 className="font-bold text-lg mb-10">🔒Login</h3>
          <div>
            <span className=''>Email<sup>  {errors.email && <span className='text-red-900'>*</span>}</sup></span> <br />
            <input type="email"  placeholder='Enter your Email' className=' bg-white text-black  md:w-80 px-3 rounded-md border-2 border-black outline-none dark:bg-slate-900 dark:text-white  dark:border-white ' {...register("email", { required: true })} />
            <br />
            {errors.email && <span className='text-red-900 text-sm'>This field is required</span>}

            <div className='mt-1'>
              <br />
              <span>Password<sup>  {errors.password && <span className='text-red-900'>*</span>}</sup></span>
              <br />
              <input type="password" placeholder='Enter your Password' className=' bg-white text-black md:w-80 px-3 rounded-md border-2 border-black outline-none  dark:bg-slate-900 dark:text-white dark:border-white'  {...register("password", { required: true })} />
              <br />
              {errors.email && <span className='text-red-900 text-sm'>This field is required</span>}

            </div>
            <div className='flex justify-between mt-9'>
              <button className='btn btn-secondary  rounded-md dark:text-white ' type='submit'>Login</button>
              <p>Not register? <Link to="/Signup"><u className='text-blue-600' onClick={() => document.getElementById("my_modal_2").close()}>Signup</u></Link></p>
            </div>
          </div>
          </form>

        </div>
      </dialog>
    </div>
  )
}

export default Login
