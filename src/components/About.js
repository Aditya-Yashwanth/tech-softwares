import React from "react";
import { Container, Typography, Grid } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ marginBottom: "10px", maxWidth: "unset !important" }}>
      <Typography variant="h4" gutterBottom fontWeight="700">
        About Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography>
            In every field of study, doing research is crucial to push forward in
            technology. It takes a lot of time to guide scholars to achieve great
            results. The modern world we live in today is shaped by breakthroughs
            in technology, and these breakthroughs are only possible with the
            right guidance.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>
            However, in reality, providing effective guidance is often challenging
            due to the personal and professional commitments of research scholars.
            To help scholars facing these challenges, our team is here to offer
            support and guide them through various stages of their research.
            Revathi Technologies is particularly skilled at assisting with
            detailed research analysis, ensuring accuracy.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>
            With a track record of over three years, we've successfully completed
            more than 100 research projects and contributed to numerous articles
            published in various research journals.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
