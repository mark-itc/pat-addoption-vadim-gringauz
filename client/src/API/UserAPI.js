import axios from 'axios'
// const serverURL = process.env.SERVER_URL
const axiosUser = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_SERVER_URL}/user`
})

class UserAPI {
  static async getAllUsers (accessToken) {
    try {
      const response = await axiosUser.get('/', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching all users data:', error)
      return error
    }
  }

  static async getOneUser (userID) {
    try {
      const response = await axiosUser.get(`/${userID}`)
      return response.data
    } catch (error) {
      console.error('Error fetching user data by ID:', error)
      return error
    }
  }

  static async updateUser (userID, newUserData) {
    try {
      const response = await axiosUser.patch(`/${userID}`, newUserData)
      return response.data
    } catch (error) {
      console.error('Error updating user data by ID:', error)
      return error
    }
  }

  static async makeUserAdmin (userID, accessToken) {
    try {
      const response = await axiosUser.patch(`/${userID}/make-admin`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Error updating user data (set as admin):', error)
      return error
    }
  }

  static async removeAdmin (userID, accessToken) {
    try {
      const response = await axiosUser.delete(`/${userID}/make-admin`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Error updating user data (remove admin):', error)
      return error
    }
  }

  static async deleteUser (userID, accessToken) {
    try {
      const response = await axiosUser.delete(`/${userID}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching user data by ID:', error)
      return error
    }
  }
}

export default UserAPI
