import { Box } from "@mui/material";
import { skills } from "../Data/skills";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const Skills = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box margin="20px 0">
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
            min-width="131px"
            max-width="200px"
            min-height="312px"
            maxHeight="312px"
          >
            <center>
              <h2 key={item.id}>{item.title}</h2>
              {item.skill.map((items) => (
                <Box
                  bgcolor={colors.grey[900]}
                  p={1}
                  m="10px 0"
                  borderRadius="5px"
                  border="1px solid black"
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
