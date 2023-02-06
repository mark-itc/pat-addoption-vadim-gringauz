import React from 'react'
import { Typography } from '@mui/material'

function Title () {
  return (
    <Typography
      variant='h1'
      color='secondary'
      textAlign={'center'}
      lineHeight={'0.7em'}
      sx={{ textShadow: '2px 2px 2px black' }}
    >
      Make a friend for life
    </Typography>
  )
}

export default Title
