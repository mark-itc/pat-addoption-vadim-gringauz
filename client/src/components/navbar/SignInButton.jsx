import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function SignInButton() {
    const navigate = useNavigate()

    return (
        <Button
            onClick={() => navigate('/signin')}
            variant={'contained'}
            size={'small'}
            color={'success'}
            sx={{ 
                mt: 'auto',
                mb: 'auto',
                borderRadius: '30px', 
                fontSize: {xs: '0.6rem', md: '1.2rem'},
                height: {xs: '30px', md: '50px'}
            }}
        >
            Sign Up
        </Button>
    )
}

export default SignInButton