import React from 'react'
import { useState } from 'react'
import {
  Tooltip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'

function UserSettings ({ userSettings, size }) {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar 
          alt='Remy Sharp' 
          src='/static/images/avatar/2.jpg'
          sx={{ width: size, height: size }}
           />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {userSettings.map(userSetting => (
          <MenuItem key={userSetting.name} onClick={userSetting.onClick}>
            <Typography textAlign='center'>{userSetting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default UserSettings
