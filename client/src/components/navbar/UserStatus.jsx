import React from 'react'
import { useSelector } from 'react-redux'
import UserMenu from './UserMenu'
import SignInButton from './SignInButton'

function UserStatus () {
  const { isSignedIn } = useSelector(state => state.auth)

  return <>{isSignedIn ? <UserMenu /> : <SignInButton />}</>
}

export default UserStatus
