import React from "react";
import { Stack } from '@mui/material'
import CreatedWith from './CreatedWith'
import FooterMap from "./FooterMap";


function FooterBody() {


  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"space-evenly"}
      sx={{ width: "100%" }}
    >
      <CreatedWith />
      <FooterMap />
    </Stack>
  );
}

export default FooterBody;
