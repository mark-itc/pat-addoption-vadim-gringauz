import React from 'react'
import { Container, Stack } from '@mui/material'
import Header from '../components/homepage/Header'
import QuickSearch from '../components/QuickSearch'
import Status from '../components/homepage/Status'
// import QuickSearch from '../components/QuickSearch'
// import Preview from '../components/welcome/Preview'
// import Articles from '../components/welcome/Articles'
// import Stats from '../components/welcome/Stats'

function HomePage() {
  return (
    <Container maxWidth={'xl'}>
      <Header />
      <QuickSearch />
      <Status />
      {/* <Container>
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
      </Container> */}
    </Container>
  )
}

export default HomePage
