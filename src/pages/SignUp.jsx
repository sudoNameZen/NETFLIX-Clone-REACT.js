import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] =useState('')
    const [password,setPassword] =useState('')
    const {user,SignUp} =UserAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await SignUp(email,password)
        }catch(error){
            console.log(error);
        }
    }


  return (
    <>
    <div className='  w-full h-screen'>
        <img  className =" hidden sm:block absolute h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
        <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'> </div>
        <div className=' fixed w-full px-4 py-24 z-50 '>
            <div className=' max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
                <div className=' max-w-[320px] mx-auto py-16'>
                    <h1 className=' text-3xl font-bold '>Sign Up</h1>
                    <form onSubmit={handleSubmit} className=' w-full flex flex-col py-4 '>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className=' p-3 my-2 bg-gray-700 rounded' 
                        type='email'  
                        placeholder='Email' />
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className=' p-3 my-2 bg-gray-700 rounded' 
                        type='password'  
                        placeholder='Password' 
                        autoComplete='current-password' />

                        <button className=' bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p ><input className ='mr-2' type='checkbox' /> Remember Me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-4'>
                            <span className='text-gray-600'>
                                Alredy subscribe to Netflix?
                            </span>{' '}
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

export default SignUp