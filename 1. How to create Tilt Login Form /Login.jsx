import React from 'react'
import { Nav } from '../components/Component';
import Tilt from 'react-parallax-tilt';

const Login = () => {

    

  return (
    <>
    <Nav/>
    <div className='w-Screen h-screen bg-gray-900 relative overflow-hidden flex flex-col justify-center items-center'>
       <div className='h-40-r w-40-r bg-gradient-to-r from-teal-400 to-blue-400 rounded-full absolute left-2/3 -top-56 animate-pulse'></div>
       

       <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-pulse"></div>
        <Tilt>

       <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center'>
                <div className='font-poppins text-teal-400 text-2xl tracking wider '>Login to We Safe</div>
                <input type="text" name="mobile" id="" placeholder='Mobile No.' className='input-text'/> 
                <input type="password" name="otp" id="" placeholder='OTP' className='input-text' />
                <input type="submit" value="Submit" className='font-poppins cursor-pointer px-5 py-1 rounded-full bg-teal-300 bg-opacity-50 hover:bg-teal-300 text-white ' />
        </form>
       </div>
        </Tilt>
           
    </div>
    </>
  )
}

export default Login