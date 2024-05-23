import React from "react";
import { Box, Typography } from "@mui/material";
import { blogListsData } from "./helper";
import Image from "next/image";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const style = {
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: { xs: "auto", sm: "auto", md: "100%" },
    // maxWidth: "1600px",
    marginTop: "10px",
    mx: "auto",
    gap: "1rem",
  },
  blogContainer: {
    display: "flex",
    flexDirection: { xs: "row", sm: "row", md: "column" },
    alignItems: "center",
    justifyContent: { xs: "center", sm: "center", md: "space-between" },
    width: { xs: "auto", sm: "auto", md: "32%" },
    minWidth: { xs: "auto", sm: "auto", md: "333px" },
    height: { xs: "88px", sm: "88px", md: "427px" },
    borderRadius: "10px",
    border: "1px solid #ECECEC",
  },
  image: {
    width: "100%",
    maxWidth: { xs: "161px", sm: "161px", md: "382px" },
    height: { xs: "88px", sm: "88px", md: "247px" },
    borderRadius: "10px",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    padding: "10px",
  },
  heading: {
    // fontFamily: "Inter",
    fontSize: "15.75px",
    fontWeight: 700,
    lineHeight: "18.4px",
    textAlign: "left",
    color: "#222222",
    px: "1rem",
    mb: { xs: "1rem", sm: "1rem", md: "0rem" },
    // width: "340px",
  },
  readMore: {
    my: "1rem",
    mx: "1rem",
    width: "137px",
    // height: "36.09px",
    display: { xs: "none", sm: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 22px ",
    gap: "0px",
    borderRadius: "5px",
    background: "#FF90171A",
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // gap: "1rem",
    mt: "4rem",
  },
  paginationButton: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    color: "#fff",
    background: "#FF9017",
    cursor: "pointer",
    mx: "0.5rem",
  },
};

const BlogLists = () => {
  return (
    <Box sx={style.rootContainer}>
      {blogListsData.map((blog) => (
        <Box key={blog.id} sx={style.blogContainer}>
          <Box sx={style.image}>
            <Image
              src={blog.image}
              alt="blog"
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box sx={style.subContainer}>
            <Box
              sx={{
                ...style.subContainer,
                flexDirection: "row",
                gap: { xs: "1rem", sm: "1rem", md: "0.5rem" },
                ml: { xs: "0.5rem", sm: "0.5rem", md: "0rem" },
              }}
            >
              <AccessTimeOutlinedIcon
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              />
              <Typography>{blog.date}</Typography>
              <PersonOutlineRoundedIcon
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              />
              <Typography
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              >
                {blog.authorName}
              </Typography>
            </Box>
            <Typography sx={style.heading}>{blog.title}</Typography>
          </Box>

          <Box sx={style.readMore}>
            <Typography
              sx={{
                fontSize: "13.56px",
                fontWeight: 400,
                lineHeight: "16.1px",
                textAlign: "center",
                color: "#FF9017",
              }}
            >
              Read More
            </Typography>
          </Box>
        </Box>
      ))}

      <Box sx={style.pagination}>
        <Box sx={style.paginationButton}>1</Box>
        <Box
          sx={{
            ...style.paginationButton,
            background: "white",
            color: "black",
          }}
        >
          2
        </Box>
        <Box
          sx={{
            ...style.paginationButton,
            background: "white",
            color: "black",
          }}
        >
          3
        </Box>
        <Box
          sx={{
            ...style.paginationButton,
            background: "white",
            color: "black",
          }}
        >
          4
        </Box>
      </Box>
    </Box>
  );
};

export default BlogLists;
