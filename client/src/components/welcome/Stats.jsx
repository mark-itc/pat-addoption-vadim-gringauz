import React from 'react'
import { Stack } from '@mui/material'
import StatBox from './StatBox'

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
      spacing={3}
      sx={{ width: '100%' }}
      justifyContent={'center'}
    // alignItems={'center'}
    >
      {tempStats.map(stat => (
        <StatBox stat={stat} />
      ))}
    </Stack>
  )
}

export default Stats