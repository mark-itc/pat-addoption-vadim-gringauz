import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import Image from 'mui-image'
import articlesList from '../config/articles'
import kidWithDogImg from '../assets/hug-dog.jpg'

function Article() {
    return (
        <Container>

            <Typography variant='h1'>
                {articlesList[0].title}
            </Typography>
            <Typography variant='h3'>
                article by: {articlesList[0].author}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='body1' >
                        <p dangerouslySetInnerHTML={{ __html: articlesList[0].text }} ></p>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Image
                        shift={false}
                        alt={'Pets love'}
                        src={kidWithDogImg}
                        showLoading
                        fit={'cover'}
                        sx={{ aspectRatio: { xs: '16/9', md: '2/3' } }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}


export default Article
