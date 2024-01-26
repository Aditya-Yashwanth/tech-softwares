import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const Domains = () => {
  const domainsList = [
    { name: "Machine Learning", imgUrl: "/machine_learning.jpeg" },
    { name: "Image Processing", imgUrl: "/image_processing.jpg" },
    { name: "Internet Of Things", imgUrl: "/iot.jpg" },
    { name: "Wireless Sensor Networks", imgUrl: "/wireless_netw.jpeg" },
    { name: "Cloud Computing", imgUrl: "/cloud_comp.jpg" },
    { name: "Networking", imgUrl: "/networking.jpg" },
    { name: "Wireless Communication", imgUrl: "/wireless_communication.jpg" },
    { name: "Optical Communication", imgUrl: "/optical_communication.jpg" },
    { name: "Artificial Intelligence", imgUrl: "/ai.jpg" },
    { name: "Embedded Systems", imgUrl: "/embedded_systems.jpg" },
    {
      name: "MicroControllers & MicroProcessors",
      imgUrl: "/MicroControllers_MicroProcessors.jpg",
    },
    { name: "Electronics", imgUrl: "/electronics.jpg" },
  ];
  return (
    <Container sx={{ marginBottom: "10px", maxWidth: "unset !important" }}>
      <Typography variant="h4" gutterBottom fontWeight="700">
        Domains
      </Typography>
      <Container>
        <Grid container spacing={1} mt={3}>
          {domainsList.map((domain, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                variant="outlined"
                sx={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}${domain.imgUrl}')`,
                  backgroundSize: "cover",
                  height: "200px", // Adjust the height as needed
                  color: "#fff",
                }}
              >
                <CardContent
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "rgb(0,0,0,0.45)",
                      borderRadius: "1.75rem",
                    }}
                  >
                    {domain.name}
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

export default Domains;
