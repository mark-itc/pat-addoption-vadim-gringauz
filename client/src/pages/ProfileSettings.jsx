import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Typography } from '@mui/material'

function ProfileSettings() {
  const { isSignedIn, signedUser } = useSelector((state) => state.auth) // eslint-disable-line

  return (
    <Container maxWidth='lg'>
      <Typography variant='h1'>
        Profile/Acount Settings
      </Typography>
      <Typography variant='body'>
        {signedUser.firstName}<br/>
        {signedUser.lastName}<br/>
        {signedUser.email}<br/>
      </Typography>
    </Container>
  )
}

export default ProfileSettings