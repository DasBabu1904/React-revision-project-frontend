import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    setEmail(e.target.email.value)
    setPassword(e.target.password.value)
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col item-center justify-center'>
          <input name='email' required className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5' type='email' placeholder='Enter your email'></input>
          <input name='password' required className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-2' type='password' placeholder='Enter password'></input>
          <button className=' outline-none bg-emerald-600 rounded-full text-xl py-3 px-5 mt-2'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login