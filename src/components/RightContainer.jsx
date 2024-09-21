import { Box } from "@mui/material";
import Footer from "./Footer";
import ContactMe from "../Scenes/ContactMe";
import Profile from "../Scenes/Profile";
import AboutMe from "../Scenes/AboutMe";
import Experience from "../Scenes/Experience";
import Skills from "../Scenes/Skills";
import Project from "../Scenes/Project";

const RightContainer = () => {
  return (
    <>
      <Box sx={{ padding: { xs: "20px", sm: "20px 10px" } }}>
        <Profile />
        <AboutMe />
        <Experience />
        <Skills />
        <Project />
        <ContactMe />
        <Footer />
      </Box>
    </>
  );
};

export default RightContainer;
