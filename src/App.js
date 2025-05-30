import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Box } from "@mui/material";
import Newsletter from "./Newsletter";
import Home from "./Home";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Login from "./Login";
import Registration from "./Registration";
import About from "./About";
import Profile from "./Profile";
import Chatbot from "./Chatbot";
import { AuthProvider, useAuth } from "./AuthProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  // Customize the theme here if needed
  palette: {
    background: {
      paper: '#007BFF',  // Ensure the paper color is defined
    },
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Box sx={{ pt: "64px" }}>
            <Routes>
              <Route path="/" element={<Home />} exact></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/profile" element={<UserProfile />} />
        <Route path="/path" element={<LearningPath />} />
        <Route path="/content" element={<ProtectedRoute element={<Content />} />} />
        <Route path="/discussion" element={<ProtectedRoute element={<Discussion />} />} /> */}
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Router>
      </AuthProvider>
      </ThemeProvider>
    );
  }
}
