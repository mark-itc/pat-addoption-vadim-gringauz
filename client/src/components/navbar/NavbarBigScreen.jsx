import React from 'react'
import { Stack, Box } from '@mui/material'
import LogoText from './LogoText'
import Logo from './Logo'
import UserStatus from './UserStatus'
import TopMenu from './TopMenu'
import DarkModeToggle from './DarkModeToggle'
import pages from '../../config/pages'

function NavbarBigScreen () {
  return (
    <Stack
      direction={'row'}
      justifyContent={'start'}
      alignItems={'center'}
      sx={{ 
        width: '100%' 
      }}
    >
      <Logo size={56} />
      <LogoText />
      <TopMenu pages={pages} />
      <Box sx={{ ml: 'auto' }}>
        <DarkModeToggle />
        <UserStatus />
      </Box>
    </Stack>
  )
}

export default NavbarBigScreen
