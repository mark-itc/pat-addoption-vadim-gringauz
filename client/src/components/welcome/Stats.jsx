import React from 'react'
import { Stack } from '@mui/material'
import StatBox from './StatBox'

const tempStats = [
  {
    id: 'assdg5r4',
    name: 'Succesful Adoptions',
    value: 117,
    emoji: '🐕🐈'
  },
  {
    id: 'ryt55453df',
    name: 'Pets in Foster homes',
    value: 12,
    emoji: '🏡'
  },
  {
    id: '123ddsghjhjh',
    name: 'Volunteers',
    value: 55,
    emoji: '💪'
  },
  {
    id: 'aaasvnhmjg3',
    name: 'Still Looking for a new family',
    value: 285,
    emoji: '👓'
  }
]

function Stats () {
  return (
    <Stack
      direction={'row'}
      spacing={3}
      sx={{ width: '100%' }}
      justifyContent={'center'}
      // alignItems={'center'}
    >
      <>
        {tempStats.map(stat => (
          <StatBox key={stat.id} stat={stat} />
        ))}
      </>
    </Stack>
  )
}

export default Stats
