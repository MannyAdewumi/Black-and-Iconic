import React, { useState } from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Register = () => {
    const [message, setMessage]= useState(" ")
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => console.log(data)
    
        const handleGoogleSignIn = () => {
            
        }
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-10 pb-10 mb-8'>
            <h2 className='text-xl font-semibold font-poppins text-obsedian mb-4'>
                Please Signup
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-8'>
                    <label className='block text-gray-700 text-sm font-semibold mb-3 font-poppins' 
                     htmlFor="email"> Email
                    </label>
                    <input 
                     {...register("email", { required: true })}
                     type="email" name='email' id='email' placeholder='Enter Email Address' 
                     className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight 
                     focus:outline-none focus:shadow text-sm text-gray-700 font-montserrat' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-semibold mb-2 font-poppins' 
                     htmlFor="password"> Password
                    </label>
                    <input 
                     {...register("password", { required: true })}
                     type="password" name='password' id='password' placeholder='Password' 
                     className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight 
                     focus:outline-none focus:shadow text-sm text-gray-700 font-montserrat' />
                </div>
                {
                    message && <p className='text-red-600 text-xs italic mb-3'>{message}</p>
                }
                <div>
                    <button className='bg-obsedian text-white hover:bg-black font-bold py-2 px-6 
                     font-poppins rounded focus:outline-none'>Signup</button>
                </div>
            </form>
            <p className='align-baseline font-montserrat font-medium mt-4 text-sm text-gray-500'>
                Already have an account? Please <Link to="/Login" className='text-obsedian 
                hover:text-black hover:font-bold'>Login</Link>
            </p>
            {/* Google sign in */}
            <div className='mt-6'>
                <button 
                 onClick={handleGoogleSignIn}
                 className='w-full flex flex-wrap gap-2 items-center justify-center 
                 bg-obsedian hover:bg-gray-900 text-white font-normal text-sm font-poppins py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle className='mr-2' />
                    Sign in with Google
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register