import { Box, IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@emotion/react";

const Header = (toggleColorMode) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      zIndex="2"
      position="fixed"
      height="60px"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="10px 0"
      backgroundColor={colors.grey[900]}
    >
      <Box mx="20px">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <img src="/Images/G.png" height="30px" width="30px" />
        </Link>
      </Box>
      <Box mx="20px">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
