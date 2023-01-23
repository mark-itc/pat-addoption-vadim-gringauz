import React from 'react'
import { Box, Container, Button } from '@mui/material'
import CoverImage from './CoverImage'
import WelcomeMessage from './WelcomeMessage'

function Hero () {
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <CoverImage />
      <Container maxWidth='xl'>
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            height: '50%',
            padding: '30px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            justifyContent: 'space-between',
            fontSize: { xs: '15px', md: '25px' }
          }}
        >
          <WelcomeMessage />
          <Button
            variant='contained'
            size='large'
            sx={{ width: 'fit-content' }}
          >
            Signin / Signup
          </Button>
          <Button
            variant='contained'
            size='medium'
            sx={{ width: 'fit-content' }}
          >
            Search Pets
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
