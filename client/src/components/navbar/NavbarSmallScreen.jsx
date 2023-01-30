import React from 'react'
import { Stack, Box } from '@mui/material'
import Logo from './Logo'
import DrawerMenu from './DrawerMenu'
import UserSettings from './UserSettings'
import userSettings from '../../config/userSettingsList'
import DarkModeToggle from './DarkModeToggle'
import pages from '../../config/pages'

function NavbarSmallScreen () {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      sx={{
        display: { xs: 'flex', md: 'none' },
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
        <UserSettings userSettings={userSettings} size={'60px'} />
      </Box>
    </Stack>
  )
}

export default NavbarSmallScreen
