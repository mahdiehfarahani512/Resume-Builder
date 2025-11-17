import React from 'react'
import logo1 from "../images/logo.svg"

const Header = () => {
  return (
    <>
   <div className='flex justify-center items-center gap-2 bg-gradient-to-r from-[#abff7e]  to-white p-2' >
    <button className='bg-green-600 text-white rounded-[8px] px-3 py-1 font-medium'>New</button>
    <span className='text-green-700 font-semibold text-[14px]'>Al Feature Added</span>
   </div>

   <div className="flex justify-around py-4 items-center">
   <img className="h-11" src={logo1}></img>

   <div className=' flex gap-8'>
    <a className="hover:text-green-600 text-[14px]">Home</a>
     <a className="hover:text-green-600 text-[14px]">Feature</a>
      <a className="hover:text-green-600 text-[14px]">Testimonials</a>
       <a className="hover:text-green-600 text-[14px]">Contact</a>
   </div>
   <div className="flex gap-2">
 <button className="px-6 py-2 cursor-pointer bg-green-500  hover:bg-green-700 rounded-full text-white text-[14px]">Get started</button>
         <button className="px-6 py-2 cursor-pointer hover:bg-gray-50   border border-black rounded-full text-[14px]">Login</button>
 </div>
   </div>
  </>
  )
}

export default Header