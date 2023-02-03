import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, Button } from '@mui/material'
import CoverImage from './CoverImage'
import Title from './Title'
import WelcomeMessage from './WelcomeMessage'

function Hero() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <CoverImage />
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          zIndex: 99,
          padding: '0 50px',
          fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' },
        }}
      >
        <Stack spacing={{xs: 1,md: 5}} alignItems={'center'} mb={10}>
          <Title />
          <WelcomeMessage color={'white'} />
          <Button
            variant='contained'
            size='large'
            sx={{ width: 'fit-content' }}
            onClick={() => navigate('/signin')}
          >
            Signin / Signup
          </Button>
        </Stack>

      </Box>
    </Box>
  )
}

export default Hero
