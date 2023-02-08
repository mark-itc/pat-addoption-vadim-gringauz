import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'



function RouterNew() {
  const { isSignedIn, signedUser } = useSelector((state) => state.auth)

  return (
    <>
      
    </>
  )
}

export default RouterNew