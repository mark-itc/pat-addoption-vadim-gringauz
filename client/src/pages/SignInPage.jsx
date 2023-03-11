import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Container, Tab, Box, Paper } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import SignInForm from '../components/signin/SignInForm'
import SignUpForm from '../components/signin/SignUpForm'
import useAuth from '../hooks/useAuth'

function SignInPage () {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (auth.isSignedIn === true) {
      navigate('/')
    }
  }, [auth])

  return (
    <Container maxWidth={'md'}>
      <Box
        sx={{
          width: '100%',
          typography: 'body1',
          padding: { sx: '0 50px', sm: '50px' }
        }}
      >
        <Paper elevation={10}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} centered>
                <Tab label='Sign in' value='1' />
                <Tab
                  label={`I'm new (Sign up)`}
                  value='2'
                  sx={{ width: { xs: '200px', sm: '500px' } }}
                />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <SignInForm />
            </TabPanel>
            <TabPanel value='2'>
              <SignUpForm />
            </TabPanel>
          </TabContext>
        </Paper>
      </Box>
    </Container>
  )
}

export default SignInPage
