import React from "react";
import { Box, Typography } from "@mui/material";
import LeftContainer from "./LeftContainer";
import BlogLists from "./BlogLists";

const style = {
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    width: "100%",
    mt: { xs: "1rem", sm: "1rem", md: "4rem" },
  },
  title: {
    fontFamily: "Volkhov",
    fontSize: { xs: "24px", sm: "24px", md: "42px" },
    fontWeight: 700,
    lineHeight: "32px",
    textAlign: "center",
  },
  leftContainer: {
    width: { xs: "100%", sm: "100%", md: "25%" },
    maxWidth: { xs: "auto", sm: "auto", md: "450px" },
    display: { xs: "none", sm: "none", md: "flex" },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ml: "2rem",
  },
  rightContainer: {
    width: { xs: "95%", sm: "95%", md: "75%" },
    maxWidth: "1200px",
    mr: "1rem",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
    maxWidth: "1800px",
    mt: { xs: "2rem", sm: "2rem", md: "4rem", lg: "6rem" },
    mx: "1rem",
  },
};

const BlogList = () => {
  return (
    <Box sx={style.rootContainer}>
      <Typography sx={style.title}>Blogs</Typography>
      <Box sx={style.subContainer}>
        <Box sx={style.leftContainer}>
          <LeftContainer />
        </Box>
        <Box sx={style.rightContainer}>
          <BlogLists />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogList;
