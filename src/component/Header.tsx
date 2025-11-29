import React from 'react'
import logo1 from "../images/logo.svg"
import { useNavigate } from "react-router";

const Header = () => {
    const changePage=useNavigate()
  return (
    <>
   <div className='flex justify-center items-center gap-2 bg-gradient-to-r from-[#abff7e]  to-white p-2' >
    <button className='bg-green-600 text-white rounded-[8px] px-3 py-1 font-medium'>New</button>
    <span className='text-green-700 font-semibold text-[14px]'>Al Feature Added</span>
   </div>

   <div className="flex justify-around py-4 items-center">
   <img className="h-11 cursor-pointer" src={logo1}></img>

   <div className=' flex gap-8'>
    <a className="hover:text-green-600 text-[14px] cursor-pointer">Home</a>
     <a className="hover:text-green-600 text-[14px] cursor-pointer">Feature</a>
      <a className="hover:text-green-600 text-[14px] cursor-pointer">Testimonials</a>
       <a className="hover:text-green-600 text-[14px] cursor-pointer">Contact</a>
   </div>
   <div className="flex gap-2">
 <div className="flex gap-2">
  <button
    onClick={() => {
      changePage("/register");
    }}
    className="px-6 py-2 cursor-pointer bg-green-500 transition-all hover:bg-green-700 rounded-full text-white text-[14px]"
  >
    Register
  </button>

  <button
    onClick={() => {
      changePage("/login");
    }}
    className="px-6 py-2 cursor-pointer hover:bg-gray-50 transition-all border border-black rounded-full text-[14px]"
  >
    Login
  </button>
</div>
 </div>
   </div>
  </>
  )
}

export default Header