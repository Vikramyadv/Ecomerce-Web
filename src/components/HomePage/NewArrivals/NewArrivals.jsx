"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { newArrivalsCarouseldata, newArrivalcardData } from "./helper";
import { useState } from "react";
import CustomButton from "@/components/Buttons/CustomButton";
import ShoeCard from "@/components/shoesCard/page";
import Link from "next/link";

const style = {
  rootContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "9rem",
    flexDirection: "column",
    mb: "2rem",
    background: "#FFFFFF",
    maxWidth: "1400px",
    mx: "auto",
  },
  title: {
    fontSize: "3rem",
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
  carouselDiv: {
    maxWidth: "1155px",
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    justifyContent: "space-evenly",
    mt: "2rem",
    mb: "2rem",
  },
  carouselInnerDiv: {
    padding: "20px 46px",
    mx: "10px",
    borderRadius: "10px",
    backgroundColor: "#FAFAFA",
  },
  carouselInnerLabel: {
    fontFamily: "Inter",
    fontSize: "1rem",
    fontWeight: "400",
    textAlign: "center",
    color: "#8A8A8A",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "50px",
    mt: "2rem",
    mb: "6rem",
  },
};

const NewArrivals = ({ title = "New Arrivals" }) => {
  const [selectedData, setSelectedData] = useState(1);
  const handleClick = (id) => {
    setSelectedData(id);
  };

  return (
    <Box sx={style.rootContainer}>
      <Typography sx={style.title}>{title}</Typography>
      <Typography sx={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </Typography>
      <Box sx={style.carouselDiv}>
        {newArrivalsCarouseldata.map((data) => {
          return (
            <Box
              key={data.id}
              sx={style.carouselInnerDiv}
              style={{
                backgroundColor: selectedData === data.id && "#FF9017",
                boxShadow:
                  selectedData === data.id && "0px 20px 35px 0px #00000026",
              }}
              onClick={() => handleClick(data.id)}
            >
              <Typography
                sx={style.carouselInnerLabel}
                style={{ color: selectedData === data.id && "#FFFFFF" }}
              >
                {data.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box sx={style.boxContainer}>
        {newArrivalcardData.map((data) => {
          return <ShoeCard key={data.id} data={data} />;
        })}
      </Box>

      <Link
        href={`/shoppage/${newArrivalsCarouseldata[selectedData - 1]?.label}`}
        style={{ textDecoration: "none" }}
      >
        <CustomButton content="View More" />
      </Link>
    </Box>
  );
};

export default NewArrivals;
