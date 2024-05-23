import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import LikeIcon from "../../../public/Assets/Blogs/like.svg";
const style = {
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    gap: "1rem",
    width: "100%",
  },
  imageContainer: {
    // width: "100%",
    width: "110px",
    height: "73.33px",
    gap: "0px",
    borderRadius: "10px",
  },
  textContainer: {
    width: "50%",
  },
  heading: {
    fontFamily: "Inter",
    fontSize: "15.75px",
    fontWeight: 600,
    // lineHeight: "18.4px",
    textAlign: "left",
    color: "#222222",
    width: "auto", // "164.36px
    maxWidth: "164.36px",
    height: "46.4px",
    top: "-0.11px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // whiteSpace: "nowrap",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    // whiteSpace: "normal",
  },
  date: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16.8px",
    textAlign: "left",
    color: "#222222",
  },
};

const BlogCard = ({ blog }) => {
  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.imageContainer}>
        <Image src={blog.image} alt="blog" style={style.imageContainer} />
      </Box>
      <Box sx={style.textContainer}>
        <Typography sx={style.heading}>{blog.title}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={style.date}>{blog.date}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Image src={LikeIcon} alt="like-icon" />
      </Box>
    </Box>
  );
};

export default BlogCard;
