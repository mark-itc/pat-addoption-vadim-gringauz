import React, { useState } from 'react'
import {Button, Menu} from '@mui/material'
import {ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material'

const theme = createTheme({})

const HoverMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = e => {
    if (e.currentTarget.localName !== 'ul') {
      const menu = document.getElementById('simple-menu').children[2]
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      }
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return
      }
    }

    setOpen(false)
  }

  theme.props = {
    MuiList: {
      onMouseLeave: e => {
        handleClose(e)
      }
    }
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id='menubutton1'
          aria-owns={open ? 'simple-menu' : null}
          aria-haspopup='true'
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
        >
          Open Menu
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          Menu
          <br />
          Items
        </Menu>
      </ThemeProvider>
    </div>
  )
}

export default HoverMenu
