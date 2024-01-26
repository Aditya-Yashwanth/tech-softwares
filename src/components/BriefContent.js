import React from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";

const BriefContent = () => {
  return (
    <Container sx={{ marginBottom: "10px", maxWidth:"unset !important" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundImage: "url('time_crunch.jpg')",
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <CardContent
              sx={{ backgroundColor: "rgb(0,0,0,0.65)", height: "100%" }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "700", color: "white" }}
                gutterBottom
              >
                Time Crunch?
              </Typography>
              <Typography sx={{ color: "white" }}>
                Each researcher faces a prescribed timeframe for the completion
                of their PhD. The caliber of time invested in research endeavors
                significantly influences the quality of research outcomes. The
                REVATHI team provides valuable assistance and support throughout
                the research process.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundImage: "url('confidentiality.png')",
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <CardContent
              sx={{ backgroundColor: "rgb(0,0,0,0.65)", height: "100%" }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "700", color: "white" }}
                gutterBottom
              >
                Confidentiality?
              </Typography>
              <Typography sx={{ color: "white" }}>
                We recognize the significance of completed and ongoing research
                endeavors. Confidentiality of your work is of paramount
                importance to us, and we are committed to upholding the highest
                standards in safeguarding the confidentiality of your research.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundImage: "url('understanding.png')",
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <CardContent
              sx={{ backgroundColor: "rgb(0,0,0,0.65)", height: "100%" }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "700", color: "white" }}
                gutterBottom
              >
                Understanding?
              </Typography>
              <Typography sx={{ color: "white" }}>
                A significant challenge encountered by research scholars is
                gaining a comprehensive understanding of foundational research
                concepts. At REVATHI, we offer comprehensive assistance, guiding
                scholars from the initial stages of topic selection to the final
                submission. Our services span across diverse research domains,
                ensuring tailored support throughout the research journey.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BriefContent;
