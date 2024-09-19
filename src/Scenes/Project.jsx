import * as React from "react";
import { Box, Typography } from "@mui/material";
import { project } from "../Data/project";
import Carousel from "react-elastic-carousel";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Project() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box>
        <h1>Project</h1>
      </Box>
      <Box
        id="project"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        gap={2}
        p={2}
      >
        <Carousel breakPoints={breakPoints}>
          {project.map((item, index) => (
            // new card
            <Box
              key={index}
              variant="outlined"
              sx={{ width: 266, padding: "9px" }}
              bgcolor={colors.grey[900]}
              borderRadius="10px"
            >
              <Box width="250px" height="160px">
                <img src={item.image} width="100%" height="100%" />
              </Box>
              <Box>
                <Typography level="title-md">{item.title}</Typography>
                <Typography level="body-sm">{item.description}</Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
