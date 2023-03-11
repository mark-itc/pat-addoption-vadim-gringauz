import React from 'react'
import { Typography } from '@mui/material'
import useAuth from '../../hooks/useAuth'

function Header () {
  const { auth } = useAuth()
  const {signedUser} = auth

  return (
    <Typography variant='h2'>
      Welcome {signedUser?.firstName} {signedUser?.lastName}
    </Typography>
  )
}

export default Header
