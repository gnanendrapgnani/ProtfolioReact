import { Box } from "@mui/material";
import { profileInfo } from "../Data/about";
import profilImg from "/Images/profile1.jpeg";

const Profile = () => {
  return (
    <>
      {profileInfo.map((item, index) => (
        <Box
          id="home"
          key={index}
          sx={{
            background:
            "linear-gradient(90deg, hsla(197, 14%, 57%, 1) 0%, hsla(0, 0%, 78%, 1) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            p: "20px",
            borderRadius: "10px",
            mb: "20px",
          }}
        >
          <Box
            height="80px"
            width="80px"
            borderRadius="50%"
            border="1.5px solid yellow"
            overflow="hidden"
          >
            <img
              src={profilImg}
              alt="Profile"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box marginLeft="10px">
            <h1 style={{ color: "black" }}>{item.Name}</h1>
            <h3 style={{ color: "black" }}>{item.Role}</h3>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Profile;
