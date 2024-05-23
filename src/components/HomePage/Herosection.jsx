"use server";
import React from "react";
import HeroImage from "../../../public/Assets/HomePage/shoesBanner1.jpg";
import Image from "next/image";
import { Box } from "@mui/material";

const Herosection = async () => {
  return (
    <Box sx={{ width: "100%", height: "auto", background: "#FAFAFA" }}>
      <Image
        src={HeroImage}
        alt="athulnaz-hero-image"
        style={{
          maxWidth: "100%",
          height: "auto",
          background: "#FAFAFA",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default Herosection;
