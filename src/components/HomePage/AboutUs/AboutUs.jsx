"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AboutUsImage from "../../../../public/Assets/HomePage/AboutUsImage.png";
import AboutUsShoeImage from "../../../../public/Assets/HomePage/AboutUsShoeImage.png";
import { AboutUsCarouseldata } from "./helper";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/Buttons/CustomButton";
import Link from "next/link";

const style = {
  rootContainer: {
    background: "#FAFAFA",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    pb: "4rem",
  },
  subContainer: {
    height: { xs: "", md: "350px", lg: "500px" },
  },
  subContainer2: {
    width: "33%",
    height: "auto",
    position: "absolute",
    top: {
      xs: "calc(10rem + 17%)",
      sm: "calc(10rem + 18%)",
      md: "calc(10rem + 25%)",
      lg: "calc(10rem + 28%)",
      xl: "calc(10rem + 30%)",
    },
    left: "33%",
    // right: "auto",
  },
  title: {
    fontSize: { xs: "24px", md: "46px" },
    fontWeight: "400",
    textAlign: "center",
    padding: "1rem",
    fontFamily: "Volkhov",
    mb: "3rem",
    mt: "8rem",
  },
  carouselDiv: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    justifyContent: "space-evenly",
    maxWidth: "100%",
    mt: "3rem",
    mb: "2rem",
  },
  carouselInnerDiv: {
    padding: "5% 2%",
    minWidth: "200px",
    // mx: "10px",
    borderRadius: "10px",
    backgroundColor: "#FAFAFA",
  },
  carouselInnerLabel: {
    // fontFamily: "Inter",
    fontSize: "1.25rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#8A8A8A",
  },
  button: {
    padding: "23px 61px",
    textAlign: "center",
    background: "#000000",
    color: "#FFFFFF",
    maxWidth: "234px",
    mb: "5rem",
  },
};

const AboutUs = () => {
  const [selectedData, setSelectedData] = useState(1);
  const router = useRouter();
  const handleClick = (id) => {
    setSelectedData(id);
  };
  return (
    <Box sx={style.rootContainer}>
      <Typography sx={style.title}>GET KNOW MORE ABOUT US</Typography>
      <Box sx={style.subContainer}>
        <Image
          src={AboutUsImage}
          alt="About Us"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={style.subContainer2}>
        <Image
          src={AboutUsShoeImage}
          alt="About Us Shoe"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={style.carouselDiv}>
        {AboutUsCarouseldata.map((data) => {
          return (
            <Box
              key={data.id}
              sx={style.carouselInnerDiv}
              onClick={() => handleClick(data.id)}
            >
              <Typography
                sx={style.carouselInnerLabel}
                style={{ color: selectedData === data.id && "#000000" }}
              >
                {data.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Link
        href={`/shoppage/${AboutUsCarouseldata[selectedData - 1]?.label}`}
        style={{ textDecoration: "none" }}
      >
        <CustomButton content="SHOP NOW" />
      </Link>
    </Box>
  );
};

export default AboutUs;
