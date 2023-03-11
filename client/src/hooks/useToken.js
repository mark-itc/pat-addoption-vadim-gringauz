export default function useToken () {
  const TOKEN_KEY = 'access-token'

  const saveToken = token => {
    localStorage.setItem(TOKEN_KEY, token)
  }

  const loadToken = () => {
    return localStorage.getItem(TOKEN_KEY)
  }

  const deleteToken = () => {
    localStorage.removeItem(TOKEN_KEY)
  }

  return { saveToken, loadToken, deleteToken }
}
