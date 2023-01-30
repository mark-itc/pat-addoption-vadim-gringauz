import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, Box, Fade } from '@mui/material'
import { orange } from '@mui/material/colors'
import styled from 'styled-components'
import NavMenuButton from './NavMenuButton'

const StyledMenu = styled(Menu)`
  && {
    top: -10px;
  }

  .MuiMenu-paper {
    background-color: ${orange['A700']};
  }
  // border-radius: 0;
`

function TopMenuItem ({ page }) {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const showSunMenu = Boolean(anchorEl)
  const [isHover, setIsHover] = useState(false)

  const openSubMenu = event => {
    setIsHover(true)
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setIsHover(false)
    setAnchorEl(null)
  }

  return (
    <Box sx={{}}>
      {/* <NavLink
        to='/'
        // className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        {page.name}
      </NavLink> */}
      <NavMenuButton
        key={page.name}
        onClick={() => navigate(page.path)}
        onMouseEnter={openSubMenu}
        onMouseLeave={handleClose}
      >
        {page.name}
      </NavMenuButton>
      {page.subPages && (
        <StyledMenu
          TransitionComponent={Fade}
          elevation={0}
          id='basic-menu'
          anchorEl={anchorEl}
          open={showSunMenu}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleClose
          }}
          sx={{
            pointerEvents: isHover ? 'none' : 'all',
            borderRadius: '0'
          }}
        >
          {page.subPages.map(subPage => (
            <MenuItem key={subPage.name} onClick={null}>{subPage.name}</MenuItem>
          ))}
        </StyledMenu>
      )}
    </Box>
  )
}

export default TopMenuItem
