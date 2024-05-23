"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CardImage from "../../../../public/Assets/HomePage/CardImage.jpg";
import CustomButton from "@/components/Buttons/CustomButton";
import ExploreSectionFooter from "./ExploreSectionFooter";

const style = {
  rootContainer: {
    height: { xs: "100%", sm: "100%", md: "100%" },
    display: "flex",
    flexDirection: { xs: "row", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    mt: "10rem",
  },
  imageContainer: {
    width: "calc(50% + 40px)",
    height: "100%",
    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
  },
  subImageContainer: { maxWidth: "100%", height: "auto" },
  textContainer: {
    width: {
      xs: "calc(50% - 20px)",
      sm: "calc(50% - 20px)",
      md: "calc(50% - 40px)",
    },
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderLeft: { xs: "1%", sm: "1%", md: "1%", lg: "80px solid white" },
    zIndex: "-1",
    // marginTop: { xs: "25px", md: "0px" },
  },
  subTextConatiner: {
    fontSize: { xs: "15px", sm: "15px", md: "1rem", lg: "2rem" },
    fontWeight: "400",
    textAlign: "center",
    mb: "3rem",
    width: {
      xs: "calc(80% - 20px)",
      sm: "calc(80% - 20px)",
      md: "calc(80% - 40px)",
    },
    marginLeft: { xs: "2px", md: "0px" },
  },
  scwedLine: {
    // height: { xs: "30%", sm: "30%", md: "100%", lg: "100%" },
    width: "2px",
    position: "relative",
    right: "2rem",
    background: "black",
    transform: "skew(-19.15deg)",
  },
  scwedLine2: {
    // height: { xs: "30%", sm: "30%", md: "90%", lg: "90%" },
    width: "2px",
    position: "absolute",
    background: "black",
    transform: "skew(-19.15deg)",
    marginLeft: "10px",
  },
};

const ExploreSection = async () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={style.rootContainer}>
        <Box sx={style.imageContainer}>
          <Image
            src={CardImage}
            alt="card-image"
            style={style.subImageContainer}
          />
        </Box>
        <Box sx={style.scwedLine} />
        <Box sx={style.scwedLine2} />

        <Box sx={style.textContainer}>
          <Typography sx={style.subTextConatiner}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </Typography>
          <CustomButton content="Explore" />
        </Box>
      </Box>
      <ExploreSectionFooter />
    </Box>
  );
};

export default ExploreSection;
