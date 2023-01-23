import React from 'react'
import { Container, Box, Stack, Typography, Divider, Link } from '@mui/material'
import AppInfo from './AppInfo'
import pages from '../../config/pages'

function Footer () {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        paddingBottom: '10px'
      }}
    >
      <Container>
        <Stack spacing={2} alignItems={'center'}>
          <Stack
            direction={'row'}
            spacing={1}
            justifyContent={'space-evenly'}
            sx={{ width: '100%' }}
          >
            <Typography variant='body1' color={'white'}>
              test123
            </Typography>
            <Stack
              direction={'row'}
              spacing={8}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map(page => (
                <Stack>
                  <Link key={page.name} href={page.path} fontSize={'1.5rem'}>
                    {page.name}
                  </Link>
                  {page.subPages && (
                    <Stack>
                      {page.subPages.map(subPage => (
                        <>
                          <Link
                            key={subPage.name}
                            href={subPage.path}
                            fontSize={'1rem'}
                          >
                            {subPage.name}
                          </Link>
                        </>
                      ))}
                    </Stack>
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
          <AppInfo />
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
