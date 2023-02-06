import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, Button } from '@mui/material'
import { Carousel } from 'react-mui-carousel'
import PreviewCard from './PreviewCard'
import pets from '../../config/previewPets'

const items = pets.map((pet) => (
  <PreviewCard key={pet.id} pet={pet} />
))

function Preview() {
  const navigate = useNavigate()

  return (
    <Stack alignItems={'center'} width={'100%'} >
      <Box
      sx={{
        padding: '20px',
        width: '100%',
      }}
      >
        <Carousel items={items} />
      </Box>
      <Button variant='contained' onClick={() => navigate('/pets')} >Browse all pets</Button>
    </Stack>
  )
}

export default Preview

