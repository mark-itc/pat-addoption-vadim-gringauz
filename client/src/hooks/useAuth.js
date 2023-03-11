import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signIn } from '../features/auth/authSlice'

export default function useAuth () {
  const dispatch = useDispatch()

  const { isSignedIn, signedUser, accessToken } = useSelector(
    state => state.auth
  )
  let auth = { isSignedIn, signedUser, accessToken }

  useEffect(() => {
    auth = { isSignedIn, signedUser, accessToken }
  }, [isSignedIn, signedUser, accessToken])

  const setAuth = (signedUser, accessToken) => {
    return dispatch(signIn({ signedUser, accessToken }))
  }

  return { auth, setAuth }
}
