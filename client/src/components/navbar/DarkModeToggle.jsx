import React from 'react'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

function DarkModeToggle () {
  const [darkModeOn, setDarkModeOn] = useState(false)

  return (
    <IconButton sx={{ ml: 1 }} onClick={() => setDarkModeOn(!darkModeOn)}>
      {darkModeOn ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default DarkModeToggle
