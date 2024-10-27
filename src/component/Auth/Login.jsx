import React from 'react'

const Login = () => {
  return (
    <div className='felx items-center justify-center'>
      <div className='border-2 border-red-600 bg-inherit'>
        <form>
          <input type='email' placeholder='Enter your email'></input>
          <input type='password' placeholder='Enter password'></input>
        </form>
      </div>
    </div>
  )
}

export default Login