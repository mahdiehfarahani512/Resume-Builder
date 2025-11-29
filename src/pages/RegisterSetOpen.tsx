import React from 'react'
import { useTrueOrFalse } from '../store/userTrueOrFalse'
import Login from "../component/Login";
import Register from "../component/Register"


const RegisterSetOpen = () => {
    const {isOpen}=useTrueOrFalse()
  return (
    <div>

        {isOpen?<Login/>: <Register/>}

    </div>
  )
}

export default RegisterSetOpen