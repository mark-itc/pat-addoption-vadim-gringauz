import axios from 'axios'
// const serverURL = process.env.REACT_APP_SERVER_URL
const axiosAuth = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_URL + '/user'
})

class AuthAPI {
  static async signUp (newUserData) {
    try {
      const response = await axiosAuth.post(
        '/signup',
        newUserData,
        { withCredentials: true }
      )
      return {
        success: true,
        newUserID: response.data.newUserID
      }
    } catch (error) {}
  }

  static async signIn (credentials) {
    const { email, password } = credentials
    try {
      const response = await axiosAuth.post('/signin', {
        email,
        password
      })
      return response.data
    } catch (error) {
      console.log('error:', error.message)
      return error
    }
  }

  static async refresh (accessToken) {
    try {
      const response = await axiosAuth.post('/refresh', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.log('Error refreshing access token', error)
      return error
    }
  }

  static async signOut () {
    try {
      const response = await axiosAuth.delete('/signout')
      return response
    } catch (error) {
      console.log('error:', error.message)
      return error
    }
  }
}

export default AuthAPI
