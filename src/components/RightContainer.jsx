import { Box } from "@mui/material";
import Footer from "./Footer";
import ContactMe from "../Scenes/ContactMe";
import Profile from "../Scenes/Profile";
import AboutMe from "../Scenes/AboutMe";
import Experience from "../Scenes/Experience";
// import Project from "../Scenes/Project";

const RightContainer = () => {
  return (
    <Box p="20px 10px">
      <Profile />
      <AboutMe />
      <Experience />
      {/* <Project /> */}
      <ContactMe />
      <Footer />
    </Box>
  );
};

export default RightContainer;
