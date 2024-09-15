import { useTheme } from "@emotion/react";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" height="100%" padding="20px">
      <Box
        // position="fixed"
        backgroundColor={colors.grey[900]}
        borderRadius="15px"
        width="100%"
        height="100%"
        paddingLeft="30px"
        paddingTop="20px"
      >
        <Link to="/">
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
          >
            <HomeRoundedIcon sx={{ marginRight: "10px", fontSize: "1.5em" }} />
            <h5>Profile</h5>
          </IconButton>
        </Link>
        <Link to="/aboutme">
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
          >
            <PersonOutlinedIcon
              sx={{ marginRight: "10px", fontSize: "1.5em" }}
            />
            <h5>About Me</h5>
          </IconButton>
        </Link>
        <Link to="/skills">
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
          >
            <BuildRoundedIcon sx={{ marginRight: "10px", fontSize: "1.5em" }} />
            <h5>Skills</h5>
          </IconButton>
        </Link>
        <Link to="/project">
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
          >
            <FolderOpenRoundedIcon
              sx={{ marginRight: "10px", fontSize: "1.5em" }}
            />
            <h5>Project</h5>
          </IconButton>
        </Link>
        <h1 style={{ fontFamily: "sans-serif", color: colors.grey[200] }}>
          Social
        </h1>
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
          <FaLinkedin marginRight="10px" fontSize="1.5em" />
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
          <FaGithub marginRight="10px" fontSize="1.5em" />
          <h5>Github</h5>
        </IconButton>
      </Box>
    </Box>
  );
};

export default SideBar;
