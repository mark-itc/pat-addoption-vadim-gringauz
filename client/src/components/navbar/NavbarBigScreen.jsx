import React from 'react'
import { Stack, Box } from '@mui/material'
import LogoText from './LogoText'
import Logo from './Logo'
import UserSettings from './UserSettings'
import userSettings from '../../config/userSettingsList'
import TopMenu from './TopMenu'
import DarkModeToggle from './DarkModeToggle'
import pages from '../../config/pages'

function NavbarBigScreen () {
  return (
    <Stack
      direction={'row'}
      justifyContent={'start'}
      alignItems={'center'}
      sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }}
    >
      <Logo size={56} />
      <LogoText />
      <TopMenu pages={pages} />
      <Box sx={{ ml: 'auto' }}>
        <DarkModeToggle />
        <UserSettings userSettings={userSettings} size={'50px'} />
      </Box>
    </Stack>
  )
}

export default NavbarBigScreen
