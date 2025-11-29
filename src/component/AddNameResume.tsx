import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useTrueOrFalse } from '../store/userTrueOrFalse'
import Modal from './Modal'
interface ResumeT{
  accent_color:string
  _id:string  
  title:string
  updatedAt:string
}


const AddNameResume = () => {
    const token = localStorage.getItem("token");
  const [selected,setSelected]=useState<{resumeData:{title:string},resumeId?:string}|undefined>(undefined)
  const {data ,refetch}=useQuery<ResumeT[]>({
    queryKey:["resume"],
    queryFn:async()=>{
      const {data}=await axios.get("api/users/resumes",{
        headers:{
          Authorization:token
        }
      })
      return data.resumes
      
    }
    
  })

  const {mutate}=useMutation({
    mutationFn:async(_id:string)=>{
      await axios.delete(`/api/resumes/delete/${_id}`,{
        headers:{
          Authorization:token
        }
      })
    }
  })

  const handelDelete=(_id:string)=>{
    mutate(_id,{
      onSuccess:()=>{
        refetch()
      }
    })
  }

  
  const { setIsOpen ,isOpen } = useTrueOrFalse();

  return (
 <div className="flex flex-col px-40 py-10 gap-4">
      <div className="flex gap-4 ">
        <button
          onClick={() => {
            setSelected(undefined)
            setIsOpen(true);
          }}
          className=" bg-white w-36 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
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
            className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500  text-white rounded-full"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
            Create Resume
          </p>
        </button>
        <button className=" bg-white w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
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
            className="lucide lucide-cloud-upload size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500  text-white rounded-full"
            aria-hidden="true"
          >
            <path d="M12 13v8"></path>
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="m8 17 4-4 4 4"></path>
          </svg>
          <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
            Upload Existing
          </p>
        </button>
      </div>
      < hr className="w-76 text-gray-300" />
      <ul className="flex gap-4">
        {data?.map((Item)=>(
          <li key={Item._id}  className="flex flex-col rounded-lg border border-blue-400 bg-blue-100">
            <button 
              className="relative w-36 h-46  flex flex-col items-center justify-center rounded-lg gap-2  group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-pen-line size-7 group-hover:scale-105 transition-all"
                aria-hidden="true"
                
              >
                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                <path d="M8 18h1"></path>
              </svg>
              <p
                className="text-sm group-hover:scale-105 transition-all  px-2 text-center text-[#3b82f6]"
                
              >
                {Item.title}
              </p>
              <p
                className="absolute bottom-1 text-[11px] text-[#3b82f6] transition-all duration-300 px-2 text-center"
              
              >
               update on {Item.updatedAt.substring(0,10)}
              </p>
              <div className="absolute top-1 right-1 group-hover:flex items-center hidden ">
                <svg onClick={()=>{handelDelete(Item._id)}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                  aria-hidden="true"
                >
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                  <path d="M3 6h18"></path>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                <svg onClick={()=>{
                  setSelected({
                    resumeData:{title:Item.title},
                    resumeId:Item._id
                  })
                  setIsOpen(true)
                  
                }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pencil size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                  aria-hidden="true"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                  <path d="m15 5 4 4"></path>
                </svg>
              </div>
            </button>
          </li>
       ))}
      </ul>
      {isOpen&&
        <Modal initialData={selected}  refetch={refetch} />
      }
    </div>

  )
}

export default AddNameResume