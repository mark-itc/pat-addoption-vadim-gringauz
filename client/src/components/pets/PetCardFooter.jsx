import React from "react";
import { CardActions, IconButton, Badge, Button, Stack } from "@mui/material";
import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";

function PetCardFooter({ pet, onReserve, onToggleWishlist }) {
  const badgeStyles = {
    right: -15,
    top: 13,
    backgroundColor: "#f44336", // or use theme.palette.secondary.main
    color: "#fff", // or use theme.palette.secondary.contrastText
    fontSize: "0.8rem",
    fontWeight: "bold",
    height: 20,
    minWidth: 20,
    padding: "0 4px",
    "& span": {
      transform: "scale(0.8) translate(30%, -30%)",
    },
  };

  const handleReserve = () => {
    onReserve(pet.id);
  };

  const handleToggleWishlist = () => {
    onToggleWishlist(pet.id);
  };

  return (
    <CardActions
      disableSpacing
      sx={{
        position: "absolute",
        bottom: "2.7rem",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
        <IconButton
          aria-label="add to favorites"
          onClick={handleToggleWishlist}
        >
          {pet.inWishlist ? (
            <Favorite color="secondary" />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </IconButton>
        {pet.status === "adoption" ? (
          <Badge badgeContent="reserved" sx={{ ...badgeStyles }}>
            <Button disabled>Reserve for Adoption</Button>
          </Badge>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleReserve}
            size="small"
            sx={{
              height: "2rem",
            }}
          >
            Adopt
          </Button>
        )}
    </CardActions>
  );
}

export default PetCardFooter;
