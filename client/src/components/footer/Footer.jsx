import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box, Stack, Typography, Button } from '@mui/material'
import AppInfo from './AppInfo'
import CreatedWith from './CreatedWith'
import pages from '../../config/pages'

function Footer () {
  const navigate = useNavigate()

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
            <CreatedWith />
            <Stack
              direction={'row'}
              spacing={8}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map(page => (
                <Stack>
                  <Button
                    size='small'
                    key={page.name}
                    onClick={() => navigate(page.path)}
                    sx={{
                      fontSize: '1.5rem',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    {page.name}
                  </Button>
                  {page.subPages && (
                    <Stack>
                      {page.subPages.map(subPage => (
                        <>
                          <Button
                            size='small'
                            key={subPage.name}
                            onClick={() => navigate(subPage.path)}
                            sx={{
                              fontSize: '1rem',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                          >
                            {subPage.name}
                          </Button>
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
