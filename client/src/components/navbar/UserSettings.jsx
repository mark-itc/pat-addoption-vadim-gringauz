import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Tooltip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'

function UserSettings({ userSettings, size }) {
  const navigate = useNavigate()

  const { isSignedIn } = useSelector((state) => state.auth)


  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOnClick = (path) => {
    handleCloseUserMenu()
    navigate(path)
  }

  return (
    <>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/2.jpg'
            sx={{ width: size, height: size, backgroundColor: isSignedIn ? 'red' : 'blue' }}
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
          <MenuItem key={userSetting.name} onClick={() => handleOnClick(userSetting.path)}>
            <Typography textAlign='center' variant='button'>
              {userSetting.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default UserSettings
