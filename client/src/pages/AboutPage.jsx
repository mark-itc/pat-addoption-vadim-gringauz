import React from 'react'
import { Container, Typography } from '@mui/material'

function AboutPage() {

  return (
    <Container maxWidth='lg'>
      <Typography variant='h1'>
        About us
      </Typography>
      <Typography variant='h2'>
        Who are we?
      </Typography>
      <Typography variant='body1'>
        We🧡Pets is a profit-less organiztion who's mission is to find warm loving homes to dogs and cats
      </Typography>
    </Container>
  )
}

export default AboutPage