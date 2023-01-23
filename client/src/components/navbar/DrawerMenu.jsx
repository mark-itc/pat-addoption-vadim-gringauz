import React from 'react'
import { useState } from 'react'
import { 
  Drawer, 
  Stack, 
  Button,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function DrawerMenu({ pages }) {
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOpen = () => {
    setOpenDrawer(true)
  }
  const handleClose = () => {
    setOpenDrawer(false)
  }

  return (
    <>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpen}
        color='inherit'
      >
        <MenuIcon color={'secondary'} />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={openDrawer}
        onClose={handleClose}
      >
        {pages.map(page => (
          <>
            <Button
              key={page.name}
              onClick={page.onClick}
              // sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
          </>
        ))}
      </Drawer>
    </>
  )
}

export default DrawerMenu