import React from 'react'
import { Stack, Typography } from '@mui/material'
import Logo from '../navbar/Logo'

function AppInfo() {
  return (
    <Stack
    direction={'row'}
    alignItems={'center'}
    spacing={3}
    // sx={{ width: '100%'}}
  >      <Logo size={30} noMotion={true} noLink={true} />
      <Typography variant='body2' color={'white'} fontSize={'1rem'} >
        2023, All rights reserved to VG
      </Typography>
    </Stack>
  )
}

export default AppInfo