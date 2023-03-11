import React from 'react'
import { Container, Stack } from '@mui/material'
import Header from '../components/homepage/Header'
import QuickSearch from '../components/QuickSearch'
import Status from '../components/homepage/Status'
import Preview from '../components/welcome/Preview'
import Articles from '../components/welcome/Articles'
import Stats from '../components/welcome/Stats'

function HomePage () {
  return (
    <Container maxWidth={'xl'}>
      <Stack spacing={5}>
        <Header />
        <QuickSearch />
        <Status />
        <Preview />
        <Articles />
        <Stats />
      </Stack>
    </Container>
  )
}

export default HomePage
