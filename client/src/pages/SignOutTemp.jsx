import React from 'react'
import { useEffect } from 'react'
import { CircularProgress, Container } from '@mui/material'
import authenticator from '../helpers/authenticator'
import { useDispatch } from 'react-redux';
import { signOut } from '../features/auth/authSlice';

function SignOutTemp() {
    const dispatch = useDispatch();


    useEffect(() => {
        authenticator.signOut()
        dispatch(signOut())
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