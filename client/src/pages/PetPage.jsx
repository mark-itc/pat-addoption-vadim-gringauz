import React from 'react'
import { Container } from '@mui/material'
import usePets from '../hooks/usePets'
import PetCard from '../components/pets/PetCard'

function PetPage() {

  const { pets } = usePets()

  return (
    <Container maxWidth='xl'>
      {pets.map(pet => {
        <PetCard key={pet._id} pet={pet} />
      })}
    </Container>
  )
}

export default PetPage