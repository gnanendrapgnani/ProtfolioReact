import { Box } from "@mui/material";
import Footer from "./Footer";
import ContactMe from "../Scenes/ContactMe";
import Profile from "../Scenes/Profile";
import AboutMe from "../Scenes/AboutMe";

const RightContainer = () => {
  return (
    <Box p="20px 10px">
      <Profile />
      <AboutMe />
      <ContactMe />
      <Footer />
    </Box>
  );
};

export default RightContainer;
