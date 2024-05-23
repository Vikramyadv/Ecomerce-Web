import React from "react";
import { Box, Typography } from "@mui/material";
import searchIcon from "../../../public/Assets/Blogs/searchIcon.svg";
import Image from "next/image";
import { recentPosts, category, tags } from "./helper";
import BlogCard from "./BlogCard";

const style = {
  rootContainer: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  search: {
    fontFamily: "Inter",
    fontSize: "13.67px",
    fontWeight: 400,
    lineHeight: "16.55px",
    textAlign: "left",
    color: "#6C757D",
  },
  searchContainer: {
    width: "100%",
    maxWidth: "382px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#F8F8F8",
    borderRadius: "7px",
    height: "53px",
    px: "1rem",
  },
  subRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hDivider: {
    width: "1px",
    height: "20px",
    backgroundColor: "#000000",
    opacity: 0.2,
    mr: "0.7rem",
  },
  recentContainer: {
    width: "100%",
    maxWidth: "382px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "1rem",

    background: "#F8F8F8",
    p: "1rem",
    borderRadius: "4px",
    maxHeight: "400px",
    overflowY: "auto",
    scrollbarWidth: "none",
  },
  heading: {
    fontSize: "15.75px",
    fontWeight: 700,
    lineHeight: "18.4px",
    textAlign: "left",
    color: "#222222",
  },
  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "0.5rem",
  },
};
const LeftContainer = () => {
  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.searchContainer}>
        <Typography sx={style.search}>Search...</Typography>
        <Box sx={style.subRightContainer}>
          <Box sx={style.hDivider} />
          <Image src={searchIcon} alt="searchIcon" />
        </Box>
      </Box>
      <Box sx={style.recentContainer}>
        <Typography sx={style.heading}>Recent Post</Typography>
        <Box>
          {recentPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Box>
      </Box>
      <Box sx={style.recentContainer}>
        <Typography sx={style.heading}>Category</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            mt: "1rem",
          }}
        >
          {category.map((category) => (
            <Box key={category.id} sx={style.category}>
              <Typography sx={style.heading}>{category.label}</Typography>
              <Box
                sx={{
                  width: "22px",
                  height: "22px",
                  background: "#FF9017",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ ...style.heading, color: "#fff", fontSize: "13px" }}
                >
                  {category.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={style.recentContainer}>
        <Typography sx={style.heading}>Blog Tags</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
            mt: "1rem",
          }}
        >
          {tags.map((tag) => (
            <Box
              key={tag.id}
              sx={{
                background: "#fff",
                width: "fit-content",
                padding: "0.5rem",
                borderRadius: "3px",
                // mt: "1rem",
              }}
            >
              <Typography sx={{ ...style.heading }}>{tag.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LeftContainer;
