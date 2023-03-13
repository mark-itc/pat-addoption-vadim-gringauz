import axios from 'axios'
// const serverURL = process.env.REACT_APP_SERVER_URL

const axiosPet = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_SERVER_URL}/pet`
})

class PetAPI {
  static async createPet (newPetData) {
    try {
      const response = await axiosPet.get('/new', newPetData)
      return response.data

    } catch (error) {
      console.error('Error creating new pet:', error)
      return error
    }
  }

  static async updatePet (petID ,updatedPetData, accessToken) {
    try {
      const response = await axiosPet.patch(`/${petID}`, updatedPetData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      
      return response.data

    } catch (error) {
      console.error('Error updating pet data:', error)
      return error
    }
  }

  static async deletePet (petID, accessToken) {
    try {
      const response = await axiosPet.delete(`/${petID}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error deleting pet:', error)
      return error
    }
  }

  static async getOnetPet (petID, accessToken) {
    try {
      const response = await axiosPet.get(`/${petID}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error fetching pet data:', error)
      return error
    }
  }

  static async createPet (newPetData, accessToken) {
    try {
      const response = await axiosPet.post(`/${petID}`, newPetData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error creating new pet:', error)
      return error
    }
  }

  static async searchPets (filterBy) {
    try {
      const queryParams = new URLSearchParams(filterBy)
      const response = await axios.get(`/?${queryParams}`)
      return response.data
    } catch (error) {
      console.error('Error fetching filtered pets data:', error)
    }
  }

  static async addPetToWishList (petID, accessToken) {
    try {
      return
    } catch (error) {
      console.error('', error)
    }
  }

  static async removePetFromWishList (petID, accessToken) {
    try {
      return
    } catch (error) {
      console.error('', error)
    }
  }

  static async getPetsOfUser (userID, accessToken) {
    try {
      return
    } catch (error) {
      console.error('', error)
    }
  }

  static async reservePetForAdoption (petID, accessToken) {
    try {
      return
    } catch (error) {
      console.error('', error)
    }
  }

  static async reservePetForFoster (petID, accessToken) {
    try {
      return
    } catch (error) {
      console.error('', error)
    }
  }

  static async clearReservedStatus (petID, accessToken) {
    try {
      return
    } catch (error) {
      console.error('', error)
    }
  }

  static async getAllPets () {
    try {
      const response = await axios.get('/')
      return response.data
    } catch (error) {
      console.error('Error fetching all pets data:', error)
    }
  }
}

export default PetAPI
