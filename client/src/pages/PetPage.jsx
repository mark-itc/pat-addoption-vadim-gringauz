import React from 'react'
import { Container, Typography, Stack } from '@mui/material'
import usePets from '../hooks/usePets'
import PetCard from '../components/pets/PetCard'

function PetPage () {
  const { pets } = usePets()

  return (
    <Container maxWidth='xl'>
      <Typography variant='h1'>Pets</Typography>
      <Typography variant='h2'>subtitle</Typography>

      <Stack direction={'row'} spacing={5} >
        {pets.map(pet => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </Stack>
    </Container>
  )
}

export default PetPage
