import { useTheme } from "@emotion/react";
import { Box, IconButton } from "@mui/material";
import { tokens } from "../theme";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      marginTop="20px"
      width="100%"
      backgroundColor={colors.grey[900]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="10px"
      borderRadius="15px"
      sx={{ height: { xs: "100px", sm: "60px" } }}
    >
      <h5 style={{ fontSize: "1em", textAlign: "center" }}>
        Copyright © 2024 Designed by: Gnanendra P - All rights Reserved
      </h5>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <IconButton
          href="https://www.linkedin.com/in/gnanendra-p-539736263/"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <FaLinkedin marginRight="10px" fontSize="1em" />
          <h5>Linkdin</h5>
        </IconButton>
        <IconButton
          href="https://github.com/gnanendrapgnani"
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <FaGithub marginRight="10px" fontSize="1.2em" />
          <h5>Github</h5>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
