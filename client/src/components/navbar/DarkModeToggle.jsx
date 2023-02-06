import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../features/settings/settingsSlice'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

function DarkModeToggle () {
  const [darkModeOn, setDarkModeOn] = useState(false)
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme())
    setDarkModeOn(!darkModeOn)
  }

  return (
    <IconButton sx={{ ml: 1 }} onClick={handleToggle}>
      {darkModeOn ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default DarkModeToggle
