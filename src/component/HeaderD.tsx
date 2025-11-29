import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useTrueOrFalse } from '../store/userTrueOrFalse'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import logo1 from "../images/logo.svg"

interface Itype{
createdAt:string,
email:string,
name:string,
updatedAt:string,
__v:number,
_id:string,
}
interface Api{
  user:Itype,
}

const HeaderD = () => {
        const changePage=useNavigate()
      const{setIsOpen}=useTrueOrFalse()
  const token=localStorage.getItem("token")

  const{data}=useQuery<Api>({
    queryKey:["getthem"],
    queryFn:async()=>{
      const {data}=await axios.get<Api>("/api/users/data",{
        headers:{
          Authorization:token
        }
      })
      return data
    },
  })
  useEffect(()=>{
    if(localStorage.getItem("token")===null){
      changePage("/login")
    }
  })
  return (
    <div className="flex flex-col shadow-b shadow-md">
        <div className="flex justify-between items-center py-4 px-40">
          <img src={logo1} alt="" />
          <div className="flex gap-4 items-center *:text-[14px]">
            <p >
              Hi , <span>{data?.user.name}</span>
            </p>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                changePage("/");
              }}
              className="px-6 py-2 rounded-full border border-gray-400 hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

  )
}

export default HeaderD