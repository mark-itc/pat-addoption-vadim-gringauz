import axios from 'axios'
const serverURL = process.env.SERVER_URL

class PetAPI {
  static async getAllPets () {
    try {
      const response = await axios.get(serverURL + '/pet/')
      return response.data
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }
}

export default UserAPI