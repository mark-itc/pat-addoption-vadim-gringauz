import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
 

export default function ErrorPage() {
    return (
        <Container>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', height: '100vh' }} >
                <Typography fontSize={'10rem'}>
                    404
                </Typography>
            </Stack>
        </Container>
    )
}
