import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Typography,
  Badge
} from '@mui/material'
import { FavoriteBorderOutlined, Favorite } from '@mui/icons-material'

function PetCard ({ pet, onReserve, onToggleWishlist }) {
  const badgeStyles = {
    right: -15,
    top: 13,
    backgroundColor: '#f44336', // or use theme.palette.secondary.main
    color: '#fff', // or use theme.palette.secondary.contrastText
    fontSize: '0.8rem',
    fontWeight: 'bold',
    height: 20,
    minWidth: 20,
    padding: '0 4px',
    '& span': {
      transform: 'scale(0.8) translate(30%, -30%)'
    }
  }

  const handleReserve = () => {
    onReserve(pet.id)
  }

  const handleToggleWishlist = () => {
    onToggleWishlist(pet.id)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={pet.name}
        subheader={`${pet.breed} - ${pet.size} - ${pet.color}`}
      />
      <CardMedia
        sx={{ height: 0, paddingTop: '56.25%' /* 16:9 */ }}
        image={pet.image}
        title={pet.name}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {pet.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          onClick={handleToggleWishlist}
        >
          {pet.inWishlist ? (
            <Favorite color='secondary' />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </IconButton>
        {pet.status === 'adoption' ? (
          <Badge badgeContent='reserved' sx={{ ...badgeStyles }}>
            <Button disabled>Reserve for Adoption</Button>
          </Badge>
        ) : (
          <Button variant='contained' color='primary' onClick={handleReserve}>
            Reserve for Adoption
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default PetCard