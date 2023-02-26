import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Header () {
  const { signedUser } = useSelector(state => state.auth)

  return (
    <Typography>
      Welcome {signedUser.firstName} {signedUser.lastName}
    </Typography>
  )
}

export default Header
