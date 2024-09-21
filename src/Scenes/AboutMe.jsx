import { Box } from "@mui/material";
import { aboutMeInfo } from "../Data/about";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      {aboutMeInfo.map((item) => (
        <Box key={item.id} id="aboutme">
          <h1 style={{ marginBottom: "10px" }}>{item.title}</h1>
          <p style={{ fontSize: "1.4em", marginBottom: "20px" }}>
            {item.information}
          </p>
        </Box>
      ))}
    </>
  );
};

export default AboutMe;
