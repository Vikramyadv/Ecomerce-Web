"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "@/components/Buttons/CustomButton";
import Image from "next/image";
import SubscribeImage from "../../../public/Assets/HomePage/SubscribeImage.png";
import TextField from "@/components/TextField/InputButton";

const style = {
  rootContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    mx: "auto",
    mt: "4rem",
    flexDirection: { xs: "column-reverse", md: "row" },
    flexWrap: "wrap",
    mb: "2rem",
    maxWidth: "1500px",
    background: "#FFFFFF",
  },
  image: {
    width: { xs: "100%", sm: "100%", md: "50%" },
    maxWidth: "794px",
    height: "auto",
  },
  textContainer: {
    width: { xs: "99%", sm: "99%", md: "50%" },
    display: "flex",
    flexDirection: "column",
    maxWidth: "794px",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: { xs: "24px", sm: "30px", md: "37px" },
    fontWeight: "400",
    fontFamily: "Volkhov",
  },
  description: {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#8A8A8A",
    my: "1rem",
    maxWidth: "614px",
    textAlign: "center",
  },
};
const Subscribe = async () => {
  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.image}>
        <Image
          src={SubscribeImage}
          alt="image"
          style={{ width: "100%", height: "auto", maxWidth: "794px" }}
        />
      </Box>
      <Box sx={style.textContainer}>
        <Typography sx={style.title}>Subscribe To Our Newsletter</Typography>
        <Typography sx={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </Typography>
        <TextField value="email" placeholder="Enter your mailID" />
        <CustomButton content="Subscribe Now" />
      </Box>
    </Box>
  );
};

export default Subscribe;
