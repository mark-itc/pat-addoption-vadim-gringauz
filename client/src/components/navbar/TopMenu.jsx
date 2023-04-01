import React from 'react'
import { useSelector } from 'react-redux'
import { Stack } from '@mui/material'
import TopMenuItem from './TopMenuItem'

function TopMenu ({ pages }) {
  const { isSignedIn } = useSelector(state => state.auth)

  return (
    <Stack sx={{ position: 'relative' }}>
      <Stack direction={'row'} spacing={2}>
        <>
          {pages.map(
            page =>
              (page.permission === 'user' && !isSignedIn) || (
                <TopMenuItem
                  key={page.name}
                  page={page}
                  isSignedIn={isSignedIn}
                />
              )
          )}
        </>
      </Stack>
    </Stack>
  )
}

export default TopMenu
