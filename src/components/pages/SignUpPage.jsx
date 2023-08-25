import React, { useState } from 'react';
import { AiFillEyeInvisible} from 'react-icons/ai';
import { TiTick } from "react-icons/ti"
import { FaFacebook, FaGoogle, FaPhone } from "react-icons/fa"

const SignUpPage = () => {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='bg-white rounded-lg shadow-md flex w-full max-w-4xl'>
        <div className='w-1/3 bg-red-900'>
          <img src="/marijuana.png" alt="marijuana" className='ml-56'/>
          <h1 className='text-4xl text-yellow-400 font-bold text-center'>DotBrand</h1>
          <img src="/Frame 20.png" alt='pharmacy' className='w-auto h-auto '/>
          <div className='text-white'>
  <h2 className='text-xl ml-6 mb-2'>Login to</h2>
  <p className='relative left-6'>
    <span className='absolute top-1/2 transform -translate-y-1/2'>
      <div className='bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center'>
        <TiTick className='text-white' />
      </div>
    </span>
    <span className='ml-6 text-sm'>Manage your orders</span>
  </p>
  <p className='relative left-6'>
    <span className='absolute top-1/2 transform -translate-y-1/2'>
      <div className='bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center'>
        <TiTick className='text-white' />
      </div>
    </span>
    <span className='ml-6 text-sm'>Get Exclusive Deals and Offers</span>
  </p>
  <p className='relative left-6'>
    <span className='absolute top-1/2 transform -translate-y-1/2'>
      <div className='bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center'>
        <TiTick className='text-white' />
      </div>
    </span>
    <span className='ml-6 text-sm'>Get Personalized Recommendations</span>
  </p>
</div>

          <img src="/Group 253.png" alt="bottle" className='h-auto w-auto ml-24'/>
        </div>

        <div className='w-2/3 p-14 bg-gray-100'>
          <h1 className='text-4xl font-bold mb-4 text-red-900 text-center'>DotBrand</h1>
          <div className='grid grid-cols-2 bg-white border border-gray-200 rounded p-1 mb-2'>
            <button
              className={`rounded p-1 ${activeTab === 'login' ? 'bg-red-900 text-white' : 'text-black'}`}
              onClick={() => setActiveTab('login')}>
              Login
            </button>
            <button
              className={`rounded p-1 ${activeTab === 'signup' ? 'bg-red-900 text-white' : 'text-black'}`}
              onClick={() => setActiveTab('signup')}>
              Sign Up
            </button>
          </div>
          <form className="space-y-2 md:space-y-4 mt-14" action="#">
            <div className="flex flex-col space-y-1">
              <label 
                htmlFor="email" 
                className="text-sm font-medium text-gray-900 dark:text-white">
                    Email or Phone Number
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5" 
                placeholder="name@company.com" 
                required=""
              />
            </div>
            <div className="flex flex-col space-y-1 relative">
              <label 
                htmlFor="password" 
                className="text-sm font-medium text-gray-900 dark:text-white">
                    Password
              </label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="••••••••" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 pr-10" 
                required=""
              />
              <AiFillEyeInvisible className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
            </div>
            <div className="flex items-center justify-between">
                <div>
                <input type="checkbox" />
                <label htmlFor="Remember" className='ml-2'>Remember Me</label>
                </div>
              <a href="/login" className="text-sm font-medium text-red-900 hover:underline">Forgot password?</a>
            </div>
            <a href="/">
            <button 
                type="submit" 
                className="w-full bg-red-900 text-white font-medium rounded-lg text-sm px-4 py-2.5 mt-4 text-center">
                    Login
            </button>
            </a>
            <div className='text-center'>
                <p>OR</p>
                <div className="flex space-x-4 mt-4 ml-32">
                <p>Login With  |</p>
              <a href="https://facebook.com" className='text-blue-600'>
                <FaFacebook className="w-7 h-7 border border-gray-600 rounded-full p-1" />
              </a>
              <a href="https://google.com" className="text-red-400">
                <FaGoogle className="w-7 h-7 border border-gray-600 rounded-full p-1" />
              </a>
              <a href="/phone" className="text-gray-700">
                <FaPhone className="w-7 h-7 border border-gray-600 rounded-full p-1" />
              </a>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
