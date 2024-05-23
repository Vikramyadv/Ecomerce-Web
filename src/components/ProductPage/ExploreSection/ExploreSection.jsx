"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CardImage from "../../../../public/Assets/HomePage/CardImage2.jpg";
import CustomButton from "@/components/Buttons/CustomButton";
import ExploreSectionFooter from "./ExploreSectionFooter";
import { FormatUnderlined, LineWeight, Title } from "@mui/icons-material";

const style = {
  rootContainer: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
    mt: "10rem",
    background: "#DADADA",
  },
  imageContainer: {
    width: "calc(50% + 40px)",
    height: "auto",
    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
  },
  subImageContainer: { maxWidth: "100%", height: "100%" },
  textContainer: {
    width: "calc(50% - 40px)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderLeft: "40px solid #DADADA",
    boxSizing: "border-box",
    zIndex: "1",
    background: "#DADADA",
    mb: "1rem",
  },
  subTextConatiner: {
    fontSize: "1rem",
    fontWeight: "400",
    maxWidth: "500px",
    textAlign: "left",
    color: "#767676",
    mb: "2rem",
    display: { xs: "none", sm: "none", md: "flex" },
  },
  scwedLine: {
    display: { xs: "none", sm: "none", md: "flex" },
    height: "100%",
    width: "2px",
    position: "relative",
    left: "-100px",
    background: "black",
    transform: "skew(-19.45deg)",
  },
  scwedLine2: {
    height: "90%",
    width: "2px",
    // position: "absolute",
    background: "black",
    transform: "skew(-19.15deg)",
    marginLeft: "10px",
  },
  limited: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#767676",
    my: "1rem",
  },
  Title: {
    fontSize: { xs: "1.5rem", sm: "1.5rem", md: "3rem", lg: "3rem" },
    fontWeight: "400",
    fontFamily: "Volhov",
    color: "#000000",
    mb: { sm: 0, md: "1rem", lg: "1rem" },
  },
  descriptionTitle: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#000000",
    mb: "1rem",
    lineHeight: "19.36px",
    textDecoration: "underline",
    display: { xs: "none", sm: "none", md: "flex" },
  },
};

const ExploreSection = async () => {
  return (
    <>
      <Box sx={style.rootContainer}>
        <Box sx={style.imageContainer}>
          <Image
            src={CardImage}
            alt="card-image"
            style={style.subImageContainer}
          />
        </Box>
        <Box sx={style.scwedLine} />

        <Box sx={style.textContainer}>
          <Typography sx={style.limited}>Limited Edition</Typography>
          <Typography sx={style.Title}>Ankit Knight</Typography>
          <Typography sx={style.descriptionTitle}> DESCRIPTION</Typography>
          <Typography sx={style.subTextConatiner}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              display: { xs: "none", sm: "none", md: "flex" },

              height: "30px",
              alignItems: "center",
              gap: "10px",
              mb: "1.5rem",
            }}
          >
            <Typography sx={style.limited} style={{ mt: "1rem" }}>
              Size:{" "}
            </Typography>
            <CustomButton content="M" />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "24px", md: "28px", lg: "28px" },
              fontWeight: "500",
              my: "1.5rem",
            }}
          >
            Rs. 1250
          </Typography>
          <CustomButton content="Buy Now" />
        </Box>
      </Box>
      <ExploreSectionFooter />
    </>
  );
};

export default ExploreSection;
