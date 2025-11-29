import React from 'react'
import { useTrueOrFalse } from '../store/userTrueOrFalse'
import Register from '../component/Register'
import Login from '../component/Login'

const LoginSetIsOpen = () => {
    const {isOpen}=useTrueOrFalse()
  return (
    <div>
        {isOpen?<Register/>:<Login/>}
    </div>
  )
}

export default LoginSetIsOpen