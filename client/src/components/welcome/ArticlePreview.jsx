import React from 'react'
import { Box, Stack, Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import img from '../../assets/article-preview.jpg'

function ArticlePreview() {
    return (
        <Paper elevation={10} >
            <Stack direction={'row'} >
                <Box sx={{ flex: '3' }} >
                    <Typography >
                        Pets can have a positive impact on one's life in numerous ways. Here are some of the most common benefits...
                        <Link to={'/why-adopt-article'} >Read more...</Link>
                    </Typography>
                </Box>
                <Box sx={{ flex: '1' }} >
                    <img loading='lazy' src={img} alt='preview' width={'400px'} />
                </Box>
            </Stack>
        </Paper>
    )
}

export default ArticlePreview