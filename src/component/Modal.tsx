import React, { useEffect } from 'react'
import { useTitle } from '../store/useResume'
import { useTrueOrFalse } from '../store/userTrueOrFalse'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
interface ResumeT{
  resumeId?:string,
  resumeData:{
    title:string,
  }
}
type Edit={
  initialData?:ResumeT,
  refetch:()=>void
}

const Modal = ({initialData , refetch}:Edit) => {
      const{title,setTitle}=useTitle()
  useEffect(()=>{
    if(initialData?.resumeData.title){
      setTitle(initialData.resumeData.title)
    }else{
      setTitle("")
    }
  },[initialData])
  const { isOpen, setIsOpen } = useTrueOrFalse();
  const changePage = useNavigate();
  const saveResume=async({resumeData,resumeId}:ResumeT)=>{
  const token = localStorage.getItem("token");
  if(initialData){
  return await axios.put("/api/resumes/update",{
     resumeId,
     resumeData:{
      title:resumeData.title
     }
    },{
      headers:{
        Authorization:token
      }
    })
  }else{
    return await axios.post(
        "/api/resumes/create",
        {
          title: resumeData.title,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
   }
}

  const { mutate } = useMutation({
    mutationFn: saveResume,
    onSuccess:()=>{
      setTitle(""),
      setIsOpen(false)
      refetch()
      if(!initialData){
        changePage("/Builder") 
      }
    }
  });
 if(!isOpen)return null
  

  return (
  <div
        onClick={() => {
          setIsOpen(false);
        }}
        className="w-full h-full bg-black/70 backdrop-blur fixed top-0 left-0 z-20 flex justify-center items-center"
      >
        <div
          className="flex flex-col z-50 gap-4 bg-white w-[400px] p-6 rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex justify-between">
            <p className="font-bold text-[20px]">{initialData?"edit resume":"Create a Resume"}</p>
            <button>
              <svg onClick={()=>{
                setIsOpen(false)
              }}
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>i</title>
                <g id="Complete">
                  <g id="x">
                    <g>
                      <line
                        x1="5"
                        y1="4.8"
                        x2="19"
                        y2="19.2"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <line
                        x1="19"
                        y1="4.8"
                        x2="5"
                        y2="19.2"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if(initialData?.resumeId){
               mutate({resumeId:initialData.resumeId,resumeData:{title:title}})
              }else{
                mutate({resumeData:{title}})
              }
              
            }}
            className=" flex flex-col  gap-2 "
          >
            <input placeholder="Enter resume title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="border primaryTest border-gray-300 px-3 py-2 w-full rounded-lg active:outline-1 outline-green-600"
              type="text"
            />
            <button className="bg-green-600 primaryTest  py-2 rounded-lg text-white" type="submit">{initialData?"save changes":"Create Resume"}</button>
          </form>
        </div>
      </div>
    

  )
}

export default Modal