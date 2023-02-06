import React from 'react'
import { Container, Stack } from '@mui/material'
import QuickSearch from '../components/QuickSearch'
import Preview from '../components/welcome/Preview'
import Articles from '../components/welcome/Articles'
import Stats from '../components/welcome/Stats'

function WelcomePage() {
  return (
    <>
      <div>Welcome </div>
      <Container>
        <Stack
          alignItems={'center'}
          mt={5}
          mb={10}
          spacing={{ xs: 5, sm: 10, md: 15 }}
        >

          <QuickSearch />
          <Preview />
          <Articles />
          <Stats />
        </Stack>
      </Container>
    </>
  )
}

export default WelcomePage
