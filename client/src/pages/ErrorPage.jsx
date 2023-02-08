import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import img from '../assets/404.png'

export default function ErrorPage () {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        outline: '1px black solid',
        backgroundColor: 'black'
      }}
    >
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'primary'
        }}
      >
        <Typography color={'white'} fontSize={'15rem'}>404</Typography>
        <img src={img} width={'60%'} />
      </Stack>
    </Box>
  )
}
