import React from 'react'
import { Typography, Stack } from '@mui/material'

function WelcomeMessage() {
  return (
    <Stack spacing={3}>
      <Typography
        variant='h1'
        color='secondary'
        sx={{ textShadow: '2px 2px 2px black' }}
      >
        Make a friend for life
      </Typography>
      <Typography
        variant='h3'
        fontWeight={'bold'}
        color='white'
        sx={{ textShadow: '2px 2px 2px black', maxWidth: '600px', textAlign: 'center' }}
      >
        Welcome to We🧡Pets
      </Typography>
      <Typography
        variant='h4'
        color='white'
        sx={{ textShadow: '2px 2px 2px black', maxWidth: '600px', textAlign: 'center' }}
      >
        Our mission is to find a warm loving home for all dogs and cats<br/><br/>
        and for you to find your perfect match
      </Typography>
    </Stack>
  )
}

export default WelcomeMessage
