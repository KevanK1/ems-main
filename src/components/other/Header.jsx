import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // 🔴 ERROR: Username logic was commented out and shows "username" instead of actual name
  // FIXED: Implemented proper username display logic
  const getUsername = () => {
    if (!props.data) {
      return 'Admin'
    } else {
      return props.data.firstName
    }
  }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> 
          {/* 🔴 ERROR: Was showing hardcoded "username" */}
          {/* FIXED: Now shows actual username */}
          <span className='text-3xl font-semibold'>{getUsername()} 👋</span>
        </h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header