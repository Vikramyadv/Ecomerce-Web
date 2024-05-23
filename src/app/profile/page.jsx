import React from "react";
import { Box } from "@mui/material";
import MainPage from "@/components/Profile/MainPage/MainPage";

const style = {
  rootContainer: {
    width: "100%",
    marginTop: "50px",
  },
};

const profile = () => {
  return (
    <Box sx={style.rootContainer}>
      <MainPage />
    </Box>
  );
};
export default profile;
