import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import { project } from "../Data/project";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Project() {
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
        borderRadius="15px"
      >
        <Carousel breakPoints={breakPoints}>
          {project.map((item) => (
            <Card
              key={item.id}
              sx={{
                minWidth: "250px",
                maxWidth: "250px",
                minHeight: "233px",
                maxHeight: "233px",
                borderRadius: "15px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
