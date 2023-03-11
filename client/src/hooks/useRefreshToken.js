import useAuth from './useAuth'
import AuthAPI from '../API/AuthAPI'
import useToken from './useToken'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
  const { loadToken } = useToken()
  const tokenFromStorage = loadToken()

  const refresh = async () => {
    const data = await AuthAPI.refresh(tokenFromStorage)
    setAuth(data.signedUser, data.accessToken)
  }

  return refresh
}

export default useRefreshToken
