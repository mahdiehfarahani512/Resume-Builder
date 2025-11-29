import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import HeaderD from '../component/HeaderD'
import Form from '../component/Form'
import Previous from '../component/Previous'

const Builder = () => {
    const changePage=useNavigate()
    const{register,watch}=useForm({
            defaultValues:{
      FullName:"",
      EmailAddress:"",
      PhoneNumber:"",
      Location:"",
      Profession:"",
      LinkedInProfile:"",
      PersonalWebsite:""
    
    }
    })
      const All=watch()
  return (
    <div className='flex flex-col'>
        <HeaderD/>
        <div className="bg-gray-50">
            <div className="flex justify-between items-center py-4 px-40">
                <div onClick={() => {
            changePage("/dashBord");
          }}
          className="flex gap-2 items-center justify-center cursor-pointer"
 >
     <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-left size-4"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <p className="text-slate-500">Back to Dashboard</p>


                </div>
                <div className="flex gap-4 pt-4">
                     <button className="flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-b from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-eye-off size-4"
              aria-hidden="true"
            >
              <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
              <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
              <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
              <path d="m2 2 20 20"></path>
            </svg>
            Private
          </button>
          <button className="flex items-center gap-2 px-6 py-2 text-xs bg-linear-to-b from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download size-4"
              aria-hidden="true"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Download
          </button>

       
                </div>
            </div>
           <div className="flex gap-20 py-4 px-40">
<Form register={register}/>
      <Previous All={All}/>
      
           </div>
        </div>
    </div>
  )
}

export default Builder