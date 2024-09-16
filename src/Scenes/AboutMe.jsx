import { Box } from "@mui/material";
import { aboutMeInfo } from "../Data/about";

const AboutMe = () => {
  return (
    <>
      {aboutMeInfo.map((item) => {
        return (
          <Box key={item.id} id="aboutme">
            <h1 style={{ marginBottom: "10px" }}>{item.title}</h1>
            <p style={{ fontSize: "1.4em", marginBottom: "20px" }}>
              {item.information}
            </p>
          </Box>
        );
      })}
    </>
  );
};

export default AboutMe;
