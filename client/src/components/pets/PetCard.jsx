import React from 'react'
import styled from 'styled-components'
import { Card, CardMedia } from '@mui/material'
import PetCardHeader from './PetCardHeader'
import PetCardExtra from './PetCardExtra'
import PetCardFooter from './PetCardFooter'

const StyledCard = styled(Card)`
  && {
    width: 20rem;
    position: relative;
  }

  &&:hover {
    /* background-color: grey; */
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  }
`

function PetCard ({ pet, onReserve, onToggleWishlist }) {
  return (
    <StyledCard raised elevation={15} >
      <CardMedia
        sx={{ 
          height: 0, 
          paddingTop: '100%',

         }}
        image={pet.image}
        title={pet.name}
      />
      <PetCardHeader pet={pet} />

      <PetCardExtra pet={pet} />

      <PetCardFooter
        pet={pet}
        onReserve={onReserve}
        onToggleWishlist={onToggleWishlist}
      />
    </StyledCard>
  )
}

export default PetCard
