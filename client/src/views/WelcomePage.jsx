import React from 'react'
import Hero from '../components/welcome/Hero'
import { Container } from '@mui/material'
import Preview from '../components/welcome/Preview'


function WelcomePage() {
  return (
    <>
      <Hero />
      <Container >
        <Preview />
        <br />
        Our numbers
        <br />
      </Container>
    </>
  )
}

export default WelcomePage
