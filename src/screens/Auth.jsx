import React, { useState } from 'react'
import { Login } from '../services/api'
import { ToastContainer } from 'react-toastify'

const Auth = () => {
    const [username,SetUsername]= useState('')
    const[password,SetPassword] = useState('')
    const handlePasswordChange = (event) => {
        SetPassword(event.target.value);
      };
      const handleUsernameChange = (event) => {
        SetUsername(event.target.value);
      };
        
    const AuthValidator=async()=>{
        const data = {username,password}
        await Login(data);
    }
  return (
    <>
    {/* login page only since this is the entry point of app */}
    <section className="bg-gray-100 dark:bg-gray-900">
        <ToastContainer/>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-green-500 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqNuiuXCWRy76qvGIL6hFPRFwmUhcc_a7WQldY2NxoeB_QUYgeEb3xVWItmBAMp8kXWw&usqp=CAU" alt="logo"/>
          ATFAL REGIONAL IVC -OYO 2023    
      </a>
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-500 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-green-500 md:text-2xl dark:text-white">
                  Sign in to the portal
              </h1>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-green-500 dark:text-white">User-Name</label>
                      <input type="text" value={username} onChange={handleUsernameChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="username" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-green-500 dark:text-white">Password</label>
                      <input type="password" onChange={handlePasswordChange} name="password" value={password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-green-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-red-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  onClick={()=>AuthValidator()} className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  
              </div>
          </div>
      </div>
  </div>
</section>

    </>
  )
}

export default Auth