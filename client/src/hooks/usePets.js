import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setPets } from '../features/pets/petsSlice'
import PetAPI from '../API/PetAPI'

const mockPets = [
  {
    _id: '122334scdsfd',
    name: 'Rondo',
    type: 'dog',
    breed: 'mixed',
    status: 'available',
    size: 's',
    color: 'brown',
    bio: 'No bio available',
    hypoallergenic: false,
    dietaryRestrictions: null,
    image:
      'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
    createdAt: new Date(),
    deleted: false
  },
  {
    _id: '12fgfg34343',
    name: 'Mocha',
    type: 'cat',
    breed: 'mixed',
    status: 'available',
    size: 'm',
    color: 'brown',
    bio: 'No bio available',
    hypoallergenic: false,
    dietaryRestrictions: null,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU',
    createdAt: new Date(),
    deleted: false
  }
]

export default function usePets () {
  const dispatch = useDispatch()
  const { pets } = useSelector(state => state.pets)

  useEffect(() => {

    const getPetsFromAPI = async () => {
        const result = await PetAPI.getAllPets()
        return result.pets
    }

    // let petsFromAPI = getPetsFromAPI()
    dispatch(setPets(mockPets))
  }, [])

  const getFilteredPets = filterBy => {
    const filteredPets = []

    return filteredPets
  }

  const getPetById = id => {
    const pet = [
      {
        _id: 'fgfgfgdse',
        name: 'Rondo',
        type: 'dog',
        breed: 'mixed',
        status: 'available',
        size: 's',
        color: 'brown',
        bio: 'No bio available',
        hypoallergenic: false,
        dietaryRestrictions: null,
        image:
          'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
        createdAt: new Date(),
        deleted: false
      }
    ]

    return pet
  }

  return { pets, getFilteredPets, getPetById }
}
