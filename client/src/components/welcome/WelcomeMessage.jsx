import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

function WelcomeMessage() {
  return (
    <Stack spacing={3}>
      <Typography
        variant='h1'
        fontSize={'2em'}
        fontWeight={'bold'}
        color='white'
        sx={{ textShadow: '2px 2px 2px black' }}
      >
        Make a friend for life
      </Typography>
      <Typography
        variant='h2'
        fontSize={'2em'}
        fontWeight={'bold'}
        color='white'
        sx={{ textShadow: '2px 2px 2px black', maxWidth: '600px', textAlign: 'center' }}
      >
        Welcome to We🧡Pets
      </Typography>
      <Typography
        variant='h3'
        fontSize={'1.5em'}
        fontWeight={'bold'}
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
