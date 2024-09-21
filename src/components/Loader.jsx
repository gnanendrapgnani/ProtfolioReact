import { Box } from "@mui/material";
import laod from "../../public/Images/loder.gif";

const Loader = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        component="img"
        src={laod}
        sx={{
          maxWidth: "100%",
          width: { xs: "40%", sm: "25%" },
          height: "auto",
        }}
      />
    </Box>
  );
};

export default Loader;
