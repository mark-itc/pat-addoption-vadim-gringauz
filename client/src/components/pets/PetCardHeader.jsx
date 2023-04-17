import React from 'react'
import { CardHeader, CardContent } from '@mui/material'

function PetCardHeader({ pet }) {
  return (
    <>
     <CardHeader
        title={pet.name}
        sx={{
          position: 'absolute',
          top: '0px',
          fontSize: '1.5rem',
          color: 'orange',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 1)',
        }}
      />
    </>
  )
}

export default PetCardHeader