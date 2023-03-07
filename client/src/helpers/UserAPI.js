import axios from 'axios'
const serverURL = process.env.SERVER_URL

class UserAPI {
  static async getAllUsers () {
    try {
      const response = await axios.get(serverURL + '/user/')
      return response.data
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }
}

export default UserAPI