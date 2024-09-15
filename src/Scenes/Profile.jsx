import { Box } from "@mui/material";
import { profileInfo } from "../Data/about";

const Profile = () => {
  return (
    <>
      {profileInfo.map((item, index) => (
        <Box
          key={index} // Include a unique key for each element in the list
          sx={{
            background:
              "linear-gradient(60deg, rgba(238, 175, 221, 1) 23%, rgba(34, 193, 195, 1) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            p: "20px",
            borderRadius: "10px",
            mb: "20px", // Add margin-bottom for spacing between boxes
          }}
        >
          <Box
            height="80px"
            width="80px"
            borderRadius="50%"
            border="1.5px solid yellow"
            overflow="hidden" // To make the image fit in the circular box
          >
            <img
              src={item.image}
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
