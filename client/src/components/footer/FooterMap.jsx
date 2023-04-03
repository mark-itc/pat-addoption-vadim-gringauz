import React from "react";
import { Stack } from "@mui/material";
import pages from "../../config/pages";
import MapPage from "./MapPage";

function FooterMap() {
  return (
    <Stack
      direction={"row"}
      spacing={8}
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <>
        {pages.map((page) => (
          <MapPage key={`footer-${page.name}`} page={page} />
        ))}
      </>
    </Stack>
  );
}

export default FooterMap;
