import { Box } from "@mui/material";
import SideBar from "./SideBar";
import RightContainer from "./RightContainer";

const MainContainer = () => {
  return (
    <Box display="flex" width="100%" height="100%" paddingTop="60px">
      <Box width="30%" height="100%" maxWidth="260px" minWidth="260px">
        <SideBar />
      </Box>
      <Box width="100%" height="100%">
        <RightContainer />
      </Box>
    </Box>
  );
};

export default MainContainer;
