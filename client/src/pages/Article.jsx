import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import Image from 'mui-image'
import kidWithDogImg from '../assets/hug-dog.jpg'

function Article() {
    return (
        <Container>

            <Typography variant='h1'>
                Why adopt pets? common benefits
            </Typography>
            <Typography variant='h3'>
                article by: ChatGPT
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Typography variant='body1'>
                Pets can have a positive impact on one's life in numerous ways. Here are some of the most common benefits:
                <br />
                <ul>
                    <li>Companionship: Pets provide a source of constant affection and support, reducing feelings of loneliness and depression.</li>
                    <li>Exercise: Taking care of a pet, such as walking a dog, provides a way to get physical exercise and improve overall health.</li>
                    <li>Reduced stress: Interacting with pets has been shown to lower stress levels and blood pressure, reducing the risk of heart disease.</li>
                    <li>Improved mood: Spending time with a pet can increase the release of "feel good" hormones, such as serotonin and dopamine, leading to improved mood and emotional well-being.</li>
                    <li>Responsibility: Owning a pet provides a sense of purpose and responsibility, helping to build self-esteem and promoting a sense of accomplishment.</li>
                    <li>Socialization: Pets can serve as icebreakers and help individuals form new relationships and social connections with other pet owners.</li>
                </ul>
                In conclusion, pets can greatly enhance one's life by providing companionship, exercise, stress relief, improved mood, responsibility, and social opportunities.
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
