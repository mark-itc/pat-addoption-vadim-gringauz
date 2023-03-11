import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signIn } from '../features/auth/authSlice'

export default function useAuth () {
  const dispatch = useDispatch()

  const { isSignedIn, signedUser, accessToken } = useSelector(
    state => state.auth
  )
  const auth = { isSignedIn, signedUser, accessToken }

  const setAuth = (signedUser, accessToken) => {
    return dispatch(signIn({ signedUser, accessToken }))
  }

  return { auth, setAuth }
}
