import React from 'react'
import { useState } from 'react';


const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }


    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col gap-3 border border-emerald-400 rounded-xl p-12'>
                <div>
                    <h1 className='text-gray-400 mb-1'>Email</h1>
                    <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Enter your email' className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1 mb-5' />
                </div>
                <div>
                    <h1 className='text-gray-400 mb-1'>Password</h1>
                    <input required value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter password' className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1 mb-5'  />
                </div>
                <div className='flex justify-center items-center'>
                    <button className='border border-emerald-400 px-2 py-1 rounded-lg bg-emerald-400 font-bold text-lg hover:bg-white hover:text-black'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
