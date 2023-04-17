import React from "react";
import { CardContent, Typography } from "@mui/material";

function PetCardExtra({ pet }) {
  return (
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {`${pet.breed} - ${pet.size} - ${pet.color}`}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {pet.bio}
      </Typography>
    </CardContent>
  );
}

export default PetCardExtra;
