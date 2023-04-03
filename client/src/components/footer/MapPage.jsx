import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import MapSubPage from "./MapSubPage";

function MapPage({ page }) {
  const navigate = useNavigate();

  return (
    <Stack>
      <Button
        size="small"
        onClick={() => navigate(page.path)}
        sx={{
          fontSize: "1.5rem",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {page.name}
      </Button>

      <>
        {page.subPages && (
          <Stack>
            <>
              {page.subPages.map((subPage) => (
                <MapSubPage key={`footer-sub-${subPage.name}`} subPage={subPage} />
              ))}
            </>
          </Stack>
        )}
      </>
    </Stack>
  );
}

export default MapPage;
