import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'

function PrivateRoute() {
  const { isSignedIn, signedUser } = useSelector((state) => state.auth)

  return (
    <>
      {/* <div>private route... {isSignedIn ? <div>signedin: {signedUser.firstName}</div> : <div>not signed in</div>}</div> */}
      {isSignedIn? <Outlet /> : <WelcomePage />}
    </>
  )
}

export default PrivateRoute
