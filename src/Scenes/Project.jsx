import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import { project } from "../Data/project";

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
      >
        {project.map((item) => (
          <Card
            key={item.id}
            sx={{
              minWidth: "210px",
              maxWidth: "210px",
              minHeight: "233px",
              maxHeight: "233px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title} // Use the item's title as alt text for better accessibility
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
      </Box>
    </>
  );
}
