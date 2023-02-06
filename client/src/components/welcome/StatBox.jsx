import React from 'react'
import { Stack, Typography } from '@mui/material'

function StatBox({ stat }) {
  return (
    <Stack
          justifyContent={'space-around'}
          alignItems={'center'}
          textAlign={'center'}
          sx={{
            width: {xs: '4rem', sm: '5rem', md: '7rem', lg: '12rem'},
            height: {xs: '4rem', sm: '5rem', md: '7rem', lg: '12rem'},
            // aspectRatio: '1/1',
            fontSize: {xs: '0.3rem', sm: '0.5rem', md: '0.7rem', lg: '1rem'},
            backgroundColor: 'rgb(106, 90, 205, 0.5)',
            borderRadius: '100%',
            boxShadow: '3px 3px 10px 3px black',
            transitionTimingFunction: 'ease-in',
            '&:hover': {
              backgroundColor: 'rgb(106, 90, 205, 0.8)',
              boxShadow: '6px 6px 20px 6px black',
              transform: 'scale(1.1)',
            }
          }}
        >
          <Typography fontSize={'2.3em'} fontWeight={'bold'} >
            {stat.value}
          </Typography>
          <Typography fontSize={'1.2em'}>
            {stat.name}
          </Typography>
          <Typography fontSize={'2em'} >
            {stat.emoji}
          </Typography>
        </Stack>
  )
}

export default StatBox