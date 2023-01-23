import React from 'react'
import { useState } from 'react'
import { Menu, MenuItem, Box, Fade } from '@mui/material'
import { orange } from '@mui/material/colors'
import styled from 'styled-components'
import NavMenuButton from './NavMenuButton'

const StyledMenu = styled(Menu)`
  && {
    top: -10px;
  }

  .MuiMenu-paper {
    background-color: ${orange['A700']};  }
    // border-radius: 0;
`

function TopMenuItem({ page }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const showSunMenu = Boolean(anchorEl)
  const [isHover, setIsHover] = useState(false)

  const openSubMenu = event => {
    console.log('mouse enter')
    setIsHover(true)
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    console.log('mouse leave')
    setIsHover(false)
    setAnchorEl(null)
  }

  return (
    <Box sx={{}}>
      <NavMenuButton
        key={page.name}
        onClick={page.onClick}
        onMouseEnter={openSubMenu}
        onMouseLeave={handleClose}
      >
        {page.name}
      </NavMenuButton>
      {page.subPages && <StyledMenu
        TransitionComponent={Fade}
        elevation={0}
        id='basic-menu'
        anchorEl={anchorEl}
        open={showSunMenu}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        sx={{
          pointerEvents: isHover ? 'none' : 'all',
          borderRadius: '0'
        }}
      >
        {page.subPages.map(subPage => (
          <MenuItem onClick={handleClose}>{subPage.name}</MenuItem>
        ))}
      </StyledMenu>}
    </Box>
  )
}

export default TopMenuItem
