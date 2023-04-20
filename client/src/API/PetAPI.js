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

  static async createPet (newPetData, accessToken, petID) {
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
      const response = await axiosPet.patch(`/${petID}/save`, {
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

  static async removePetFromWishList (petID, accessToken) {
    try {
      const response = await axiosPet.delete(`/${petID}/save`, {
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

  static async getPetsOfUser (userID, accessToken) {
    try {
      const response = await axiosPet.get(`/user/${userID}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error fetching user data (saved pets):', error)
      return error
    }
  }

  static async reservePetForAdoption (petID, accessToken) {
    try {
      const response = await axiosPet.post(`/${petID}/adopt`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error updating pet data (adopt):', error)
      return error
    }
  }

  static async reservePetForFoster (petID, accessToken) {
    try {
      const response = await axiosPet.post(`/${petID}/foster`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error updating pet data (foster):', error)
      return error
    }
  }

  static async clearReservedStatus (petID, accessToken) {
    try {
      const response = await axiosPet.delete(`/${petID}/status`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return response.data

    } catch (error) {
      console.error('Error updating pet data (clear status):', error)
      return error
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
