import React from 'react'
import { Box, Stack } from '@mui/material'
import { Carousel } from 'react-mui-carousel'
import PreviewCard from './PreviewCard'
import pets from '../../config/previewPets'

const items = pets.map((pet) => (
  <PreviewCard key={pet.id} pet={pet} />
))

function Preview() {
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
    </Stack>
  )
}

export default Preview

