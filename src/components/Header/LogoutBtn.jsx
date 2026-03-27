import React from 'react'
import useDispatch from 'react-redux'
import authService from '../../appwrite/config'
import {Logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logOutHandler = ()=>{
        authService.Logout().then(()=>{
            dispatch(Logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn