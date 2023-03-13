import PetAPI from '../API/PetAPI'


export default function usePets() {

    const pets = [
        {
            name: 'Rondo',
            type: 'dog',
            breed: 'mixed',
            status: 'available',
            size: 's',
            color: 'brown',
            bio: 'No bio available',
            hypoallergenic: false,
            dietaryRestrictions: null,
            image: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
            createdAt: new Date(),
            deleted: false
        },
        {
            name: 'Mocha',
            type: 'cat',
            breed: 'mixed',
            status: 'available',
            size: 'm',
            color: 'brown',
            bio: 'No bio available',
            hypoallergenic: false,
            dietaryRestrictions: null,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU',
            createdAt: new Date(),
            deleted: false
        },
    ]

    const getFilteredPets = (filterBy) => {
        filteredPets = []

        return filteredPets
    }

    const getPetById = (id) => {
        pet = [
            {
                name: 'Rondo',
                type: 'dog',
                breed: 'mixed',
                status: 'available',
                size: 's',
                color: 'brown',
                bio: 'No bio available',
                hypoallergenic: false,
                dietaryRestrictions: null,
                image: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
                createdAt: new Date(),
                deleted: false
            }
        ]

        return pet
    }

    return { pets, getFilteredPets, getPetById }
}