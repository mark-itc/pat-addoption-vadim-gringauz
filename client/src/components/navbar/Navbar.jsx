import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container, useScrollTrigger } from '@mui/material'
import NavbarSmallScreen from './NavbarSmallScreen'
import NavbarBigScreen from './NavbarBigScreen'

function Navbar() {

  const isMobile = useMediaQuery('(width <= 900px)');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return (
    <AppBar
      position='sticky'
      enableColorOnDark
      sx={{
        backgroundColor: trigger ? 'transparent' : undefined,
        transition: '1s'
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {isMobile ? <NavbarSmallScreen /> : <NavbarBigScreen />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
