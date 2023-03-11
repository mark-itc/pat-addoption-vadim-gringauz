import axios from 'axios'
const serverURL = process.env.SERVER_URL

class PetAPI {
  
  static async createPet (newPetData) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }

  static async updatePet (updatedPetData) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async deletePet (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  

  static async getOnetPet (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async createPet (newPetData) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async searchPets (filterBy) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async addPetToWishList (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async removePetFromWishList (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }

  static async getPetsOfUser (userID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }

  static async reservePetForAdoption (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async reservePetForFoster (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  static async clearReservedStatus (petID) {
    try {

      return 
    } catch (error) {
      console.error('', error)
    }
  }
  
  
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