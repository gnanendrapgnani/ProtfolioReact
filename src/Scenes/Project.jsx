import * as React from "react";
import { Box, Typography } from "@mui/material";
import { project } from "../Data/project";
import Carousel from "react-elastic-carousel";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

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
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card
                key={index}
                sx={{
                  maxWidth: "210px",
                  minWidth: "210px",
                  minHeight: "280px",
                  maxHeight: "280px",
                  borderRadius: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image={item.image}
                    alt="green iguana"
                    // href={item.link}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
