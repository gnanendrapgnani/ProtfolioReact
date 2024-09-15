import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { tokens } from "../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      marginTop="20px"
      width="100%"
      height="40px"
      backgroundColor={colors.grey[900]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <h5>Copyright © 2024 Designed by: Gnanendra P - All rights Reserved</h5>
    </Box>
  );
};

export default Footer;
