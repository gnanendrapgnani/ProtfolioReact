import { Box } from "@mui/material";
import { experienceInfo } from "../Data/about";

const Experience = () => {
  return (
    <>
      {experienceInfo.map((item) => {
        return (
          <Box>
            <h1>{item.title}</h1>
            <h1 style={{ marginTop: "10px" }}>{item.CompanyName}</h1>
            <h3>Role: {item.role}</h3>
            {console.log(item.role)}
            <label style={{ fontSize: "1em" }}>
              {item.startedDate} to {item.endDate}
            </label>
            <p style={{ fontSize: "1.4em", margin: "10px 0 20px" }}>
              {item.responsible}
            </p>
          </Box>
        );
      })}
    </>
  );
};

export default Experience;
