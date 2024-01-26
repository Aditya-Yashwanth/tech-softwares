import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        // Basic email validation
        error = /^\S+@\S+\.\S+$/.test(value) ? "" : "Invalid email address";
        break;
      case "phone":
        // Basic phone number validation (digits only)
        error = /^\d+$/.test(value) ? "" : "Invalid phone number";
        break;
      case "message":
        error = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const isFormValid = Object.values(formData).every(
      (field) => field.trim() !== ""
    );

    if (isFormValid && Object.values(errors).every((error) => error === "")) {
      // Use your EmailJS template ID and user ID
      const templateParams = {
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email,
        phone: formData.phone,
      };

      // Use your EmailJS service ID
      emailjs
        .send(
          "service_lpibojj",
          "template_8xaisrr",
          templateParams,
          "JfCkeY0gIUHqK0rHP"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            // Reset the form after successful submission
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            console.error("Error sending email:", error);
          }
        );
    } else {
      console.error("Form validation failed");
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        padding: "20px",
        maxWidth: "100% !important",
      }}
    >
      <Typography variant="h4" fontWeight="700" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={0} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <img
            src="contact.png"
            alt="Contact"
            style={{ width: "auto", height: "360px", borderRadius: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight="700" gutterBottom>
            Contact information
          </Typography>
          <Typography
            gutterBottom
            sx={{
              width: "250px",
              border: "2px solid #002244",
              borderRadius: "1.75rem",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "#002244",
                color: "white",
              },
            }}
            mb={2}
            mt={2}
          >
            <CallIcon sx={{ marginRight: "5px" }} /> 9581996171
          </Typography>
          <Typography
            gutterBottom
            sx={{
              width: "250px",
              border: "2px solid #002244",
              borderRadius: "1.75rem",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "#002244",
                color: "white",
              },
            }}
            mb={2}
          >
            <EmailIcon sx={{ marginRight: "5px" }} /> revathi10184@gmail.com
          </Typography>

          <Box
            sx={{
              width: "250px",
              border: "2px solid #002244",
              borderRadius: "1.75rem",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              ":hover": {
                cursor: "pointer",
                backgroundColor: "#002244",
                color: "white",
              },
            }}
            onClick={() => {
              window.open("https://wa.me/919581996171", "_blank");
            }}
          >
            <WhatsAppIcon sx={{ marginRight: "5px" }} />
            <Typography variant="body2" fontWeight="500">
              Click here to chat on WhatsApp
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Container>
            <Typography variant="h5" fontWeight="700" gutterBottom>
              Got any questions?
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </form>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
