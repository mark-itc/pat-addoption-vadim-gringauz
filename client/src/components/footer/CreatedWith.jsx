import React from "react";
import { Stack, Typography, Avatar } from "@mui/material";
import reactLogo from "../../assets/logo-react-js.png";
import reduxLogo from "../../assets/logo-redux.png";
import muiLogo from "../../assets/logo-mui.png";

function CreatedWith() {
  return (
    <Stack mt={2} spacing={3}>
      <Stack direction={"row"} spacing={5}>
        <Avatar src={reactLogo} variant="square" />
        <Avatar src={muiLogo} variant="square" />
        <Avatar src={reduxLogo} variant="square" />
      </Stack>
      <Typography variant="body1" color={"white"}>
        Contact us:
      </Typography>
    </Stack>
  );
}

export default CreatedWith;
