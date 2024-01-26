import { Grid, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: "#002244",
        borderRadius: "1.7rem",
      }}
    >
      <Grid item xs={12} md={6} display="flex">
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Embark on a transformative research journey with Revathi-Tech
            Softwares!
          </div>
          <div>
            From meticulous topic selection to post-PhD excellence, our
            comprehensive services in engineering, technology, and science
            ensure your success. Elevate your research standards with expert
            consulting, precise literature surveys, and seamless
            thesis/dissertation assistance. Revathi-Tech
            Softwares: Igniting Excellence,
            Shaping Tomorrow's Leaders.
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            color: "#fff",
            position: "relative",
            padding: "10px",
          }}
        >
          <img
            src="lib_bg.jpg"
            alt="headerBg"
            style={{
              width: "80%",
              height: "auto",
              objectFit: "contain",
              borderRadius: "1.75rem",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
