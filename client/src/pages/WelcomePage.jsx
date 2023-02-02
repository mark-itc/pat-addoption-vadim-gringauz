import React from 'react'
import Hero from '../components/welcome/Hero'
import { Container, Stack } from '@mui/material'
import QuickSearch from '../components/welcome/QuickSearch'
import Preview from '../components/welcome/Preview'
// import ArticlePreview from '../components/welcome/ArticlePreview'
import Stats from '../components/welcome/Stats'

function WelcomePage() {
  return (
    <>
      <Hero />
      <Container>
        <Stack mt={10} mb={10} spacing={20}>
          <QuickSearch />
          <Preview />
          {/* <ArticlePreview /> */}
          <Stats />
        </Stack>
      </Container>
    </>
  )
}

export default WelcomePage
