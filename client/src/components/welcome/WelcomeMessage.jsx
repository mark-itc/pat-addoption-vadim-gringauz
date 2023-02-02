import React from 'react'
import { Typography, Stack } from '@mui/material'

function WelcomeMessage({ color }) {
  return (
    <Stack spacing={{xs: 1, md: 3}}>
      <Typography
        variant='h3'
        fontWeight={'bold'}
        color={color}
        sx={{ textShadow: '2px 2px 2px black', maxWidth: '600px', textAlign: 'center' }}
      >
        Welcome to We🧡Pets
      </Typography>
      <Typography
        variant='h3'
        color={color}
        sx={{ textShadow: '2px 2px 2px black', maxWidth: '600px', textAlign: 'center' }}
      >
        Our mission is to find a warm loving home for all dogs and cats<br/><br/>
        and for you to find your perfect match
      </Typography>
    </Stack>
  )
}

export default WelcomeMessage
