import React from 'react'
import { Stack } from '@mui/material'
import TopMenuItem from './TopMenuItem'

function TopMenu ({ pages }) {

  return (
    <Stack sx={{ position: 'relative' }}>
      <Stack direction={'row'} spacing={2}>
        {pages.map(page => (
          <TopMenuItem page={page} />
        ))}
      </Stack>
    </Stack>
  )
}

export default TopMenu
