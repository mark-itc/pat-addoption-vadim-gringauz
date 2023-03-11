import axios from '../config/axios'
const serverURL = process.env.REACT_APP_SERVER_URL

class AuthAPI {
  static async signUp (newUserData) {
    try {
      const response = await axios.post(
        serverURL + '/user/signup',
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
      const response = await axios.post(serverURL + '/user/signin', {
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
      const response = await axios.post(serverURL + '/user/refresh', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      console.log('error:', error.message)
      return error
    }
  }

  static async signOut () {
    try {
      const response = await axios.delete(serverURL + '/user/signout')
      return response
    } catch (error) {
      console.log('error:', error.message)
      return error
    }
  }
}

export default AuthAPI
