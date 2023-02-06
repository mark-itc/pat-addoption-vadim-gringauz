import React from 'react'
import { Stack, Box } from '@mui/material'
import Logo from './Logo'
import DrawerMenu from './DrawerMenu'
import UserStatus from './UserStatus'
import DarkModeToggle from './DarkModeToggle'
import pages from '../../config/pages'

function NavbarSmallScreen() {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'left' }}>
        <DrawerMenu pages={pages} />
      </Box>

      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Logo size={56} />
      </Box>

      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
        <DarkModeToggle />
        <UserStatus />
      </Box>
    </Stack>
  )
}

export default NavbarSmallScreen
