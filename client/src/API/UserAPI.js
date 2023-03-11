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

  static async getOneUser (userID) {
    try {
      
      return 
    } catch (error) {
      console.error('', error)
    }
  }

  static async updateUser (userID, newUserData) {
    try {
      
      return 
    } catch (error) {
      console.error('', error)
    }
  }




  static async makeUserAdmin (userID) {
    try {
      
      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async removeAdmin (userID) {
    try {
      
      return 
    } catch (error) {
      console.error('', error)
    }
  }

  static async deleteUser (userID) {
    try {
      
      return 
    } catch (error) {
      console.error('', error)
    }
  }
}

export default UserAPI