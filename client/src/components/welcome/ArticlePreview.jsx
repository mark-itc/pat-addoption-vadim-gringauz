import React from 'react'
import { useNavigate, redirect } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material'
import img from '../../assets/article-preview.jpg'

function ArticlePreview({ summary }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/why-adopt-article')
        window.scrollTo(0, 0)
    }

    return (
        <Stack
            direction={'row'}
            bgcolor={'lightblue'}
            justifyContent={'space-around'}
        >
            <Box
                sx={{ flex: '3', padding: '10px' }}
            >
                <Typography >
                    "{summary}"
                </Typography>
                <Button variant='outlined' size='small' onClick={handleClick} >Read more...</Button>
            </Box>
            <Box sx={{ flex: '1', maxWidth: '400px', display: { xs: 'none', md: 'block' } }} >
                <img loading='lazy' src={img} alt='preview' width={'100%'} />
            </Box>
        </Stack>
    )
}

export default ArticlePreview