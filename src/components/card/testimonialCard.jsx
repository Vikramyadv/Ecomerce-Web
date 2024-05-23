import React from "react";
import { Box, Typography, Rating, ButtonBase } from "@mui/material";
import Image from "next/image";

const style = {
  mainBox: {
    width: { xs: "50%", md: "60%", lg: "80%" },
    height: "55%",
    maxWidth: "864px",
    maxHeight: "450px",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
    padding: "4rem",
    boxShadow: "0px 20px 60px 0px #2E213D14",
    position: "relative",
  },
  mainBoxImage: {
    width: "242px",
    height: "auto",
  },
  textDiv: {
    marginLeft: "8%",
    // width: "400px",
  },
  reviewDiv: {
    fontSize: { xs: "8px", md: "1rem" },
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#8A8A8A",
    maxWidth: "400px",
  },
  divider: {
    width: "230px",
    height: "1px",
    background: "#484848",
    mt: "1rem",
    mb: "1rem",
  },
  name: {
    fontSize: { xs: "16px", md: "2rem" },
    fontWeight: { xs: "800", md: "400" },
    fontFamily: "Volkhov",
    color: "#484848",
  },
  destination: {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#484848",
  },
  sideBox: {},
};

const testimonialCard = ({ data, active, idx }) => {
  return (
    <Box
      sx={{
        ...style.mainBox,
        maxHeight: idx === active ? "450px" : "300px",
        height: idx === active ? "55%" : "45%",
        padding: idx === active ? "4rem" : "2rem",
        paddingLeft: idx === active ? "4rem" : "3rem",
        boxShadow:
          idx === active
            ? "0px 20px 60px 0px #2E213D14"
            : "0px 14.95px 44.86px 0px #2E213D14",
        position: "relative",
        left: {
          xs: idx + 1 === active ? "0%" : "auto",
          lg: idx + 1 === active ? "20%" : "auto",
        },
        right: idx - 1 === active ? "20%" : "auto",
        zIndex: idx === active ? "2" : "1",
      }}
    >
      <Box
        sx={{
          ...style.mainBoxImage,
          // height: idx === active ? "50%" : "40%",
          // maxWidth: idx !== active && "180px",
          // width: idx !== active && "180px",
        }}
      >
        <Image
          src={data?.image}
          alt="image"
          style={{
            height: "auto",
            width: "100%",
          }}
        />
      </Box>
      <Box sx={style.textDiv} style={{ marginLeft: idx !== active && "4%" }}>
        <Typography
          sx={style.reviewDiv}
          style={{ mb: idx !== active ? "3rem" : "1rem" }}
        >
          {data?.review}
        </Typography>
        <Rating name="read-only" value={data?.rating} readOnly />
        <Box sx={style.divider} />
        <Typography sx={style.name}>{data?.name}</Typography>
        <Typography sx={style.destination}>{data?.designation}</Typography>
      </Box>
    </Box>
  );
};

export default testimonialCard;
