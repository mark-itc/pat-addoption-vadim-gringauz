import React from 'react'
import { useEffect } from 'react'
import { CircularProgress, Container } from '@mui/material'
import { useDispatch } from 'react-redux';
import { signOut } from '../features/auth/authSlice';

function SignOutTemp() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(signOut())
    }, [dispatch])

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