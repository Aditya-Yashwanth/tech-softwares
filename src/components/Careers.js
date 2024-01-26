import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import React from "react";

const Careers = () => {
  return (
    <Container sx={{ marginBottom: "20px", maxWidth: "unset !important" }}>
      <Paper
        elevation={2}
        sx={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#002244",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h4" fontWeight="700" mb={2}>
            Careers
          </Typography>
          <Typography variant="body1" mb={4}>
            Explore exciting career opportunities with us, join our team. We are currently
            hiring for the following positions:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h6", fontWeight: 600 }}
                primary="Professional Content Writers"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h6", fontWeight: 600 }}
                primary="Research Analyst"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h6", fontWeight: 600 }}
                primary="Technical Writer/Reader"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h6", fontWeight: 600 }}
                primary="Manuscript Editors"
              />
            </ListItem>
          </List>
          <Typography variant="body1" mt={3}>
            If you are passionate about your work and eager to make a
            difference, we'd love to hear from you. Join us on our journey!
          </Typography>
        </div>
        <Avatar
          src="careers.jpg"
          alt="Team Image"
          sx={{ width: 400, height: 400, marginLeft: "20px" }}
        />
      </Paper>
    </Container>
  );
};

export default Careers;
