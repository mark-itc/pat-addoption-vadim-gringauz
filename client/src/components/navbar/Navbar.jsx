// import React from 'react'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container, Stack, useScrollTrigger } from '@mui/material'
import Logo from './Logo'
import LogoText from './LogoText'
import TopMenu from './TopMenu'
import UserSettings from './UserSettings'
import DrawerMenu from './DrawerMenu'
import pages from '../../config/pages'
import userSettings from '../../config/userSettingsList'

function Navbar() {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return (
    <AppBar position='sticky' enableColorOnDark sx={{ 
      backgroundColor: trigger ? 'transparent' : undefined,
      transition: '1s',
       }} >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          {/* VISIBLE ONLY ON BIG SCRRENS */}
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
              <UserSettings userSettings={userSettings} size={'50px'} />
            </Box>
          </Stack>

          {/* VISIBLE ONLY ON SMALL SCRRENS */}
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}
          >
            <DrawerMenu pages={pages} />
            <Logo size={56} />
            <UserSettings userSettings={userSettings} size={'60px'} />
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
