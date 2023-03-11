import React from 'react'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ErrorAlert from './ErrorAlert'
import AuthAPI from '../../API/AuthAPI'
import useAuth from '../../hooks/useAuth'
import useToken from '../../hooks/useToken'

function SignUpForm () {
  const [openAlert, setOpenAlert] = useState(false)
  const [message, setMessage] = useState('')

  const { setAuth } = useAuth()
  const { saveToken } = useToken()

  const handleSubmit = async event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const newUserData = {
      email: data.get('email'),
      password: data.get('password'),
      passwordVerify: data.get('password-repeat'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone')
    }

    const result = await AuthAPI.signUp(newUserData)

    //! NOW SIGN-IN
    // TODO write it cleaner without repeating
    if (result.success) {
      const credentials = {
        email: data.get('email'),
        password: data.get('password')
      }
      const result = await AuthAPI.signIn(credentials)

      if (!result.accessToken) {
        setOpenAlert(true)
        setMessage('Wrong email or password')
      }

      setAuth(result.signedUser, result.accessToken)
      saveToken(result.accessToken)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
          // fontSize: '1rem',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='phone'
                label='Phone number'
                name='phone'
                autoComplete='tel'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password-repeat'
                label='verify password'
                type='password'
                id='password-repeat'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <ErrorAlert
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        message={message}
      />
    </Container>
  )
}

export default SignUpForm
