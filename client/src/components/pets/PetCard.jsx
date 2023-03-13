import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  badge: {
    right: -15,
    top: 13,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontSize: '0.8rem',
    fontWeight: 'bold',
    height: 20,
    minWidth: 20,
    padding: '0 4px',
    '& span': {
      transform: 'scale(0.8) translate(30%, -30%)',
    },
  },
}));

function PetCard({ pet, onReserve, onToggleWishlist }) {
  const classes = useStyles();

  const handleReserve = () => {
    onReserve(pet.id);
  };

  const handleToggleWishlist = () => {
    onToggleWishlist(pet.id);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={pet.name}
        subheader={`${pet.breed} - ${pet.size} - ${pet.color}`}
      />
      <CardMedia
        className={classes.media}
        image={pet.image}
        title={pet.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {pet.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleToggleWishlist}>
          {pet.inWishlist ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
        </IconButton>
        {pet.status === 'adoption' ? (
          <Badge badgeContent="reserved" classes={{ badge: classes.badge }}>
            <Button disabled>Reserve for Adoption</Button>
          </Badge>
        ) : (
          <Button variant="contained" color="primary" onClick={handleReserve}>
            Reserve for Adoption
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default PetCard;