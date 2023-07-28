import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BgImg from "../assets/bgPicture.jpg";
import { UserAuth } from "../context/AuthContext";
import { useState } from 'react';

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      if(user?.email) {
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='w-full h-screen '>
        <img src={BgImg} alt="bg-img" className=' absolute w-full h-full object-cover hidden sm:block ' />

        <div className='fixed w-full px-4 py-20 z-50'>
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-16 '>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <input onChange={(e) => setEmail(e.target.value)} className='px-5 py-3.5 mt-3 bg-gray-800 rounded-md' type="email" placeholder='Email or phone number' autoComplete='email' />

                <input onChange={(e) => setPassword(e.target.value)} className='px-5 py-3.5 mt-3 bg-gray-800 rounded' type="password"
                  placeholder='Password'
                  autoComplete='current-password'
                />

                <button className='bg-red-500 py-3 my-6 rounded-md '>
                  Sign Up
                </button>

                <div className='flex justify-between items-center text-base text-gray-500'>
                  <p><input type="checkbox" /> Remember Me</p>
                  <p>Need Help?</p>
                </div>
                <p className='pt-5' >
                  <span className='text-gray-500'>Alredy have an account? </span>
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup