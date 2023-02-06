import React from 'react'
import { Typography } from '@mui/material'

function LogoText () {
  return (
    <Typography
      fontSize={'2.5rem'}
      color={'secondary'}
      noWrap
      component='a'
      href='/'
      sx={{
        mr: 2,
        ml: 2,
        fontFamily: 'Rubik Marker Hatch',
        fontWeight: 200,
        letterSpacing: '.3rem',
        textDecoration: 'none'
      }}
    >
      We🧡Pets
    </Typography>
  )
}

export default LogoText
