import React from 'react'
import Hero from '../components/welcome/Hero'
import { Container } from '@mui/material'
import Preview from '../components/welcome/Preview'
import Stats from '../components/welcome/Stats'

function WelcomePage () {
  return (
    <>
      <Hero />
      <Container>
        <Preview />
        <br />
        <Stats />
        <br />
      </Container>
    </>
  )
}

export default WelcomePage
