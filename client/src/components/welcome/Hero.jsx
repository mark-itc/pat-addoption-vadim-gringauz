import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Button } from '@mui/material'
import CoverImage from './CoverImage'
import WelcomeMessage from './WelcomeMessage'
import QuickSearch from './QuickSearch'

function Hero() {
const navigate = useNavigate()

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
            onClick={() => navigate('/signin')}
          >
            Signin / Signup
          </Button>

          <QuickSearch />

        </Box>
      </Container>
    </Box>
  )
}

export default Hero
