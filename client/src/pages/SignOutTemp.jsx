import React from 'react'
import { useEffect } from 'react'
import { CircularProgress, Container } from '@mui/material'
import authenticator from '../helpers/authenticator'

function SignOutTemp() {

    useEffect(() => {
        authenticator.signOut()
    }, [])

    return (
        <Container>
            <CircularProgress />
            Signing out!
            <br />
            later will navigate to api endpoint
        </Container>
    )
}

export default SignOutTemp