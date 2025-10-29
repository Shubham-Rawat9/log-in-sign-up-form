import React, { useState } from 'react'

const LogInForm = () => {

  const [isLogin, setIsLogin] = useState(true) // login state

  const isSubmit= () =>{
      alert('form submited');
      
  }
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={ isLogin ? 'active' : "" } onClick={ () => setIsLogin(true)}>Log In</button>
          <button className={!isLogin ? 'active' : "" } onClick={ () => setIsLogin(false)}>Sign Up</button>
        </div>

        {isLogin ? <>
          <div className='form'>
            <h2>Login Form</h2>
            <input type="email"  placeholder='Enter Your Email' required/>
            <input type="password"  placeholder='Enter Your Password'/>
            <a href="#">Forget Password</a>
            <button onClick={isSubmit}>Login</button>
            <p className='mt-4'>Not a Member  <a href="#" onClick={()=> setIsLogin(false)}>Sign Up Now</a></p>
          </div>
        </> : <>
        <div className='form'>
           <h2>Sign UP Form</h2>
           <input type="email"  placeholder='Enter Your Email' required/>
           <input type="password"  placeholder='Enter Your Password'/>
           <input type="password"  placeholder='Confirm Your Password'/>
            <button>Sign Up</button>
          </div>
         </> } 
      </div>
     </div>
  )
}

export default LogInForm;