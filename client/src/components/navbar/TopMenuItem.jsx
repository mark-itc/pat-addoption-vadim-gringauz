import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, Box } from '@mui/material'
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
`

function TopMenuItem ({ page }) {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleTopMenuItemClick = event => {
    page.subPages ? openSubMenu(event) : navigate(page.path)
  }

  const openSubMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = event => {
    setAnchorEl(null)
  }


  return (
    <Box sx={{}}>
      <NavMenuButton key={page.name} onClick={handleTopMenuItemClick}>
        {page.name}
      </NavMenuButton>
      {page.subPages && (
        <>
          <StyledMenu
            id={page.name}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {page.subPages.map(subPage => (
              <MenuItem key={subPage.name} onClick={() => navigate(subPage.path)}>
                {subPage.name}
              </MenuItem>
            ))}
          </StyledMenu>
        </>
      )}
    </Box>
  )
}

export default TopMenuItem
