import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container, Grid, Paper, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Models from "./images/models.jpg";
import Red from "./images/red.jpg";
import SUV from "./images/suv.jpg";
import VF8 from "./images/vf8.webp";
import VF9 from "./images/vf9.webp";

// Styled Paper component for better section styling
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 8,
  boxShadow: (theme.shadows && theme.shadows[5]) || '0px 4px 6px rgba(0, 0, 0, 0.1)', // Safer fallback for boxShadow
  backgroundColor: theme.palette.background.paper,
  textAlign: "center",
}));

const SlideshowContainer = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "500px", // Set a fixed height or use min-height for responsiveness
  overflow: "hidden", // Ensure the images do not overflow the container
  marginBottom: "3rem", // Add space below the slideshow if needed
}));

const Slide = styled(Box)(() => ({
  position: "absolute",
  transition: "opacity 0.5s ease",
  width: "100%",
  height: "100%", // Ensure it fills the height of the container
}));

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    Models,
    Red,
    SUV,
    VF8,
    VF9,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Content Above the Slideshow */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Welcome to VinFast’s AI-Powered Newsletter!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4, color: "text.secondary" }}>
          Stay informed with the latest news, updates, and exciting announcements from VinFast,
          all generated automatically by our AI-powered system.
        </Typography>
      </Box>

      <Box 
  sx={{
    position: "relative",
    padding: "20px",
    background: "linear-gradient(135deg, #6D71A1 30%, #8B91B5 100%)",
    borderRadius: 4,
    color: "white",
    marginBottom: 3,
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center", // Center the text content
    display: "flex", // Use flexbox for centering
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
    Explore the Latest Updates from VinFast
  </Typography>
  <Typography variant="body2" sx={{ marginBottom: 3 }}>
    Our AI-powered system ensures you never miss a beat. Discover personalized content tailored to your interests and stay connected with the latest news and advancements.
  </Typography>
  
  {/* Optional Button */}
  <Button 
    variant="contained" 
    color="secondary" 
    onClick={() => window.open("https://vinfastauto.ca/en", "_blank")}
    sx={{
      textTransform: "none",
      paddingX: 3,
      paddingY: 1,
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#5A68A7", // Darker hover effect
      },
    }}
  >
    Learn More
  </Button>
</Box>

      {/* Slideshow Section */}
      <SlideshowContainer>
        {images.map((img, index) => (
          <Slide
            key={index}
            sx={{
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <img
              src={img}
              alt={`Slideshow Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%", // Make sure the image fills the container
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          </Slide>
        ))}

        {/* Left Arrow Button */}
        <IconButton
          onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
            zIndex: 10, // Ensure the button is on top of the images
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        {/* Right Arrow Button */}
        <IconButton
          onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
            zIndex: 10, // Ensure the button is on top of the images
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </SlideshowContainer>

      {/* How It Works Section */}
      <StyledPaper>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          How It Works
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Our AI technology pulls information from VinFast’s official sources to create personalized
          newsletters just for you. It’s quick, reliable, and ensures you stay updated without needing
          to search for information yourself.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          With a simple click, you can access the latest content tailored to your interests, providing
          a seamless and informative experience.
        </Typography>
      </StyledPaper>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ marginY: 4 }}>
        <Grid item xs={12} sm={4}>
          <StyledPaper>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              AI-Powered Content
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Generated newsletters using AI technology, ensuring accuracy and relevance.
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledPaper>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Personalized Experience
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Create a profile to receive content tailored to your preferences.
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledPaper>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Effortless Navigation
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              View your profile, explore content, and manage your preferences all in one place.
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>

      <Box
  sx={{
    textAlign: "center", // Center text inside the box
    display: "flex",
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
    marginTop: 4,
  }}
>
  <Button
    variant="contained"
    color="primary"
    onClick={() => navigate("/newsletter")}
    sx={{
      paddingY: 1.5,
      fontWeight: "bold",
      textTransform: "none",
      boxShadow: 3,
      "&:hover": {
        boxShadow: 6,
      },
    }}
  >
    Go to Newsletter
  </Button>
</Box>

      {/* Footer Section */}
      <Box sx={{ marginTop: 6, textAlign: "center", color: "text.secondary" }}>
        <Typography variant="body2">
          © 2024 VinFast. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};


export default Home;
