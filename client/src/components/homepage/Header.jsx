import React from 'react'
import { Typography } from '@mui/material'
import useAuth from '../../hooks/useAuth'

function Header () {
  const { auth } = useAuth()
  const {signedUser} = auth

  return (
    <Typography>
      Welcome {signedUser?.firstName} {signedUser?.lastName}
    </Typography>
  )
}

export default Header
