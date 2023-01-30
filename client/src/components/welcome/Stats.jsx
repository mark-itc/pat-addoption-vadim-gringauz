import React from 'react'
import { Stack, Typography } from '@mui/material'

const tempStats = [
  {
    name: 'Succesful Adoptions',
    value: 117,
    emoji: '🐕🐈'
  },
  {
    name: 'Pets in Foster homes',
    value: 12,
    emoji: '🏡'
  },
  {
    name: 'Volunteers',
    value: 55,
    emoji: '💪'
  },
  {
    name: 'Still Looking for a new family',
    value: 285,
    emoji: '👓'
  },
]

function Stats() {
  return (
    <Stack
      direction={'row'}
      spacing={2}
      sx={{ width: '100%' }}
      justifyContent={'start'}
    // alignItems={'center'}
    >
      {tempStats.map(stat => (
        <Stack
          justifyContent={'space-around'}
          alignItems={'center'}
          textAlign={'center'}
          sx={{
            width: `${100 / tempStats.length}%`,
            // width: '5%',
            aspectRatio: '1/1',
            fontSize: {xs: '0.3rem', sm: '0.5rem', md: '0.7rem', lg: '1rem'},
            backgroundColor: 'rgb(106, 90, 205, 0.5)',
            borderRadius: '100%',
            boxShadow: '3px 3px 10px 3px black',
            transitionTimingFunction: 'ease-in',
            '&:hover': {
              backgroundColor: 'rgb(106, 90, 205, 0.8)',
              boxShadow: '6px 6px 20px 6px black',
              transform: 'scale(1.1)'
            }
          }}
        >
          <Typography fontSize={'4em'} fontWeight={'bold'} >
            {stat.value}
          </Typography>
          <Typography fontSize={'1.8em'} >
            {stat.name}
          </Typography>
          <Typography fontSize={'3em'} >
            {stat.emoji}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default Stats