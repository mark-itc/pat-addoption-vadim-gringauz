import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CircularProgress, Stack } from '@mui/material'
import useToken from '../hooks/useToken'
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken'

function RemeberSignedUser () {
  const [isLoading, setIsLoading] = useState(true)
  const { auth } = useAuth()
  const { loadToken } = useToken()
  const refresh = useRefreshToken()

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.log(err)
      }
    }

    const tokenFromStorage = loadToken()
    if (!tokenFromStorage) {
      setIsLoading(false)
      return
    }

    !auth.accessToken ? verifyToken() : setIsLoading(false)
  }, []) // eslint-disable-line

  useEffect(() => {
    if (auth.signedUser !== null && auth.signedUser !== undefined) {
      setIsLoading(false)
    }
  }, [auth])

  return (
    <>
      {!isLoading ? (
        <Outlet />
      ) : (
        <Stack mt={10} alignItems={'center'} alignContent={'center'}>
          <CircularProgress size={200} color={'warning'} />
        </Stack>
      )}
    </>
  )
}

export default RemeberSignedUser
