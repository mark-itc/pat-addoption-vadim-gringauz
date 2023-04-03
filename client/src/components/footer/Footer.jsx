import React from "react";
import { Container, Box, Stack } from "@mui/material";
import AppInfo from "./AppInfo";
import FooterBody from "./FooterBody";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        paddingBottom: "10px",
      }}
    >
      <Container>
        <Stack spacing={2} alignItems={"center"}>
          <FooterBody />
          <AppInfo />
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
