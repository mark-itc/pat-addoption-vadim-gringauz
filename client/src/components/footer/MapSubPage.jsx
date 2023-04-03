import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MapSubPage({ subPage }) {
  const navigate = useNavigate();

  return (
    <Button
      size="small"
      onClick={() => navigate(subPage.path)}
      sx={{
        fontSize: "1rem",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {subPage.name}
    </Button>
  );
}

export default MapSubPage;
