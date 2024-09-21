import { Box, IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import PhoneIcon from "@mui/icons-material/Phone";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  return (
    <Box
      zIndex="2"
      position="fixed"
      height="70px"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="15px 10px"
      backgroundColor={colors.grey[900]}
      flexDirection="column"
    >
      {/* Header Top Section */}
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx="20px"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ p: "10px 15px", display: { xs: "block", sm: "none" } }}
          >
            {openMenu ? <CloseRoundedIcon /> : <MenuIcon />}
          </IconButton>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={900}>
            <img
              src="/Images/G.png"
              alt="Logo"
              height="30px"
              width="30px"
              style={{ cursor: "pointer" }}
            />
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

      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          width: "100%",
          backgroundColor: colors.grey[900],
          position: "absolute",
          top: "60px",
          left: 0,
          overflow: "hidden",
          transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
          opacity: openMenu ? 1 : 0,
          pointerEvents: openMenu ? "auto" : "none",

          zIndex: "1",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py="10px"
        >
          <Link to="home" spy={true} smooth={true} offset={-100} duration={900}>
            <IconButton
              sx={{
                width: "100%",
                height: "auto",
                justifyContent: "start",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                toggleMenu();
                document
                  .querySelector("#home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <HomeRoundedIcon
                sx={{ marginRight: "10px", fontSize: "1.2em" }}
              />
              <h5>Home</h5>
            </IconButton>
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-100}
            duration={900}
          >
            <IconButton
              sx={{
                width: "100%",
                height: "auto",
                justifyContent: "start",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                toggleMenu();
                document
                  .querySelector("#aboutme")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <PersonOutlinedIcon
                sx={{ marginRight: "10px", fontSize: "1.2em" }}
              />
              <h5>About Me</h5>
            </IconButton>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={900}
          >
            <IconButton
              sx={{
                width: "100%",
                height: "auto",
                justifyContent: "start",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                toggleMenu();
                document
                  .querySelector("#skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <BuildRoundedIcon
                sx={{ marginRight: "10px", fontSize: "1.2em" }}
              />
              <h5>Skills</h5>
            </IconButton>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={900}
          >
            <IconButton
              sx={{
                width: "100%",
                height: "auto",
                justifyContent: "start",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                toggleMenu();
                document
                  .querySelector("#project")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FolderOpenRoundedIcon
                sx={{ marginRight: "10px", fontSize: "1.2em" }}
              />
              <h5>Project</h5>
            </IconButton>
          </Link>
          <Link
            to="contactme"
            spy={true}
            smooth={true}
            offset={-100}
            duration={900}
          >
            <IconButton
              sx={{
                width: "100%",
                height: "auto",
                justifyContent: "start",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                toggleMenu();
                document
                  .querySelector("#contactme")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <PhoneIcon sx={{ marginRight: "10px", fontSize: "1.2em" }} />
              <h5>Contact Me</h5>
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
