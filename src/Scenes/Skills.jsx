import { Box } from "@mui/material";
import { skills } from "../Data/skills";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box margin="20px 0" id="skills">
      <h1>Skills</h1>
      <Box
        display="flex"
        alignItems="start"
        gap="20px"
        justifyContent="flex-start"
        marginTop={2}
        border="none"
        borderRadius="15px"
        p={2}
      >
        {skills.map((item) => (
          <Box
            bgcolor={colors.grey[900]}
            p={2}
            borderRadius="10px"
            minWidth="140px"
            maxWidth="140px"
            maxHeight="260px"
            minHeight="260px"
          >
            <center>
              <h2 key={item.id}>{item.title}</h2>
              {item.skill.map((items) => (
                <Box
                  bgcolor={colors.grey[900]}
                  p="2px 5px"
                  m="10px 0"
                  borderRadius="5px"
                  border={`1.5px solid ${colors.grey[400]}`}
                >
                  {items}
                </Box>
              ))}
            </center>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
