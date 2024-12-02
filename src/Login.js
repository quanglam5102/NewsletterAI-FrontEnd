import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { useAuth } from './AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const loginUser = async (username, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
  
      const data = await response.json();
      return { success: true, data }; // Return success status and data
    } catch (error) {
      console.error("Error:", error.message);
      return { success: false, error: error.message }; // Return failure status and error message
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Call loginUser and handle the response
    const result = await loginUser(email, password);
  
    if (result.success) {
      login(result.token);
      navigate("/");
    } else {
      alert(`Login failed: ${result.error}`);
    }
  };
  

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Login
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Welcome back! Please enter your login details.
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            sx={{ marginBottom: 4 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ paddingY: 1.5, fontWeight: "bold" }}
          >
            Login
          </Button>
        </form>

        {/* Link to Registration page */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Button
              onClick={() => navigate("/register")}
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Register Here
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
