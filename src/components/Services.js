import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const Services = () => {
  const servicesList = [
    "Pre-PHD",
    "On-PHD",
    "Post-PHD",
    "Consulting Services",
    "Topic Selection",
    "Literature Survey",
    "Base Paper Selection",
    "Research Proposal",
    "Implementation",
    "Paper & Language Editing",
    "Plagiarism Reduction",
    "Journal Formating & Publication",
    "Thesis & Dissertation",
  ];

  return (
    <Container sx={{ marginBottom: "10px", maxWidth: "unset !important" }}>
      <Typography variant="h4" gutterBottom fontWeight="700">
        Services
      </Typography>
      <Typography>
        We will instruct you in the following fields of research applicable to
        all fields of engineering, technology, and science.
      </Typography>
      <Container>
        <Grid container spacing={1} mt={3}>
          {servicesList.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "#6CB4EE",
                  transition: "background-color 0.3s ease-in",
                  ":hover": {
                    backgroundColor: "#002244",
                    scale: "103%",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    color="white"
                    sx={{
                      transition: "font-weight 0.3s ease-in",
                      ":hover": {
                        fontWeight: 500,
                      },
                    }}
                  >
                    {service}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Services;
