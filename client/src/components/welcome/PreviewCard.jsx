import React from 'react'
import { Card, CardMedia, CardHeader, CardContent, Typography } from '@mui/material'

export default function PreviewCard({ pet }) {
    return (
        <Card raised sx={{ width: '500px' }} >
            <CardHeader
                title={pet.name}
                titleTypographyProps={{ fontSize: '1.5rem' }}
                subheader={`${pet.gender}, ${pet.age} years old, ${pet.size} size`}
                subheaderTypographyProps={{ fontSize: '1rem' }}
            />
            <CardMedia
                component='img'
                height={'500'}
                width={'500'}
                image={pet.image}
                alt={pet.name}
                
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {pet.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
