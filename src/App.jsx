import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import MainContainer from "./components/MainContainer";
import { Route, Routes } from "react-router-dom";
import Profile from "./Scenes/Profile";
import AboutMe from "./Scenes/AboutMe";
import Skills from "./Scenes/Skills";
import Project from "./Scenes/Project";
import ContactMe from "./Scenes/ContactMe";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MainContainer />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
