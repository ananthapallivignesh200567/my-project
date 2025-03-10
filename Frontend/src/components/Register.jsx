import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../Redux/features/auth/authapi'


const Register = () => {
    const [message,setMessage]=useState('')
    const [email,setEmail]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [registerUser,{isLoading}]=useRegisterUserMutation()
    const navigate=useNavigate()
    const handleRegister= async(e)=>{
        e.preventDefault();
        const data={
            username: userName,
            email,
            password
        }
       
        try {
            await registerUser(data).unwrap()
            alert("registration successful")
            navigate('/login')
        } catch (error) {
            setMessage("regiatration failed")
        }
    }
  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-sm border shadow bg-white mx-auto !p-8'>
            <h2 className='text-2xl font-semibold !pt-5'>please Register</h2>
            <form onSubmit={handleRegister} className='space-y-5 max-w-sm mx-auto !pt-8'>
                <input onChange={(e)=>setUserName(e.target.value)} type="text" name="username" id="username"
                placeholder="username" required className='w-full bg-gray-100 focus:outline-none !px-5 !py-3 !mb-3'/>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email"
                placeholder="Email Address" required className='w-full bg-gray-100 focus:outline-none !px-5 !py-3 !mb-3'/>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password"
                placeholder="Password" required className='w-full bg-gray-100 focus:outline-none !px-5 !py-3 '/>
                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button type="submit" className='w-full !mt-5 bg-red-700 text-white hover:bg-indigo-500 font-medium !py-3 rounded-md'>
                    Register
                </button>
            </form>
            <p className='!my-5 italic text-sm text-center'>already have an account?<Link to="/login" className="text-red-700 !px-1 !underline"> Login </Link> here</p>
        </div>
    </section>
  )
}

export default Register