"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "../../../../public/Assets/HomePage/image1.png";
import image2 from "../../../../public/Assets/HomePage/image2.png";
import Image from "next/image";

const style = {
  rootContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "4rem",
    flexDirection: "column",
    mb: "2rem",
  },
  title: {
    fontSize: { xs: "24px", md: "3rem" },
    fontWeight: "400",
    fontFamily: "Volkhov",
  },
  description: {
    fontSize: { xs: "12px", sm: "12px", md: "1rem", lg: "1rem" },
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#8A8A8A",
    my: "1rem",
    maxWidth: "614px",
    textAlign: "center",
  },
  carouselDiv: {
    mt: { xs: "36px", sm: "36px", md: "4rem" },
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

const FollowUs = async () => {
  return (
    <Box sx={style.rootContainer}>
      <Typography sx={style.title}>Follow Us On Social Media</Typography>
      <Typography sx={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </Typography>
      <Box sx={style.carouselDiv}>
        <Image
          src={image1}
          alt="image1"
          style={{ width: "15.2%", height: "auto" }}
        />
        <Image
          src={image2}
          alt="image1"
          style={{ width: "13.0667%", height: "auto" }}
        />
        <Image
          src={image1}
          alt="image1"
          style={{ width: "15.2%", height: "auto" }}
        />
        <Image
          src={image2}
          alt="image1"
          style={{ width: "13.0667%", height: "auto" }}
        />
        <Image
          src={image1}
          alt="image1"
          style={{ width: "15.2%", height: "auto" }}
        />
        <Image
          src={image2}
          alt="image1"
          style={{ width: "13.0667%", height: "auto" }}
        />
        <Image
          src={image1}
          alt="image1"
          style={{ width: "15.2%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default FollowUs;
