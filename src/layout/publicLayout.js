import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OnboardingBg from "assets/images/backgrounds/eugene-golovesov-nr5zYqe0uiQ-unsplash.jpg";

export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <img
            src={OnboardingBg}
            loading="lazy"
            style={{ height: "90%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
