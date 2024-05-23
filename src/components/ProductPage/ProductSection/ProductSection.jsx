"use client";
import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { carouselData, shoeNumber } from "./helper";
import Image from "next/image";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useRouter } from "next/navigation";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Link from "next/link";

const style = {
  rootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: "2%",
    height: "fit-content",
  },
  leftContainer: {
    width: { xs: "100%", sm: "100%", md: "60%", xl: "60%" },
    maxWidth: "816px",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
    justifyContent: "center",
    alignItems: "center",
    // gap: { xs: "0", sm: "0", md: "0", lg: "20px" },
  },
  rightContainer: {
    px: "1rem",
    mt: { xs: "2rem", sm: "2rem", md: 0, xl: 0, lg: 0 },
    width: { xs: "100%", sm: "100%", md: "510px", lg: "510px", xl: "510px" },
    maxWidth: "510px",
    gap: "1rem",
  },
  carouselDiv: {
    width: { xs: "0%", sm: "0", md: "0", lg: "15%" },
    maxWidth: "90px",
    height: "742px",
    scrollbarWidth: "none",
    overflowY: "auto",
    overflowX: "none",
    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
    flexDirection: "column",
  },
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "742px",
  },
  subContainer: {
    height: "90px",
    width: "70px",
    padding: "6px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: "10px",
  },
  title: {
    fontSize: { xs: "20px", sm: "20px", md: "2rem" },
    fontWeight: "700",
    fontFamily: "Volkhov",
  },
  price: {
    fontSize: { xs: "20px", sm: "20px", md: "2rem" },

    fontWeight: "700",
    fontFamily: "Inter",
    color: "#FF9017",
  },
  color: {
    fontSize: "1rem",
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#232321",
  },
  cartButton: {
    background: "#232321",
    width: "90%",
    padding: "1rem",
    mt: "2rem",
    borderRadius: "8px",
  },
  buttonText: {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  dotContainer: {
    display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
    gap: "5px",
    width: "100%",
    justifyContent: "center",
    mt: "1rem",
  },
  subDotBox: {
    width: "10px",
    height: "10px",
    border: "0.5px solid black",
    borderRadius: "100%",
  },
  colorBox: {
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    border: "1px solid black",
    my: "1rem",
  },
};

const handleAddToCart = () => {};

const ProductSection = ({ children }) => {
  const router = useRouter();
  const [mainImage, setMainImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const handleNext = () => {
    if (mainImage + 1 === carouselData.length) {
      setMainImage(0);
    } else setMainImage(mainImage + 1);
  };

  const handlePrevious = () => {
    if (mainImage - 1 < 0) setMainImage(carouselData.length - 1);
    else setMainImage(mainImage - 1);
  };
  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.leftContainer}>
        <Box sx={style.carouselDiv}>
          {carouselData?.map((data) => {
            return (
              <Box
                sx={style.subContainer}
                style={{
                  border: data?.id === mainImage ? "1px solid black" : "none",
                }}
                key={data?.id}
                onClick={() => {
                  setMainImage(data?.id);
                }}
              >
                <Image
                  src={data?.image}
                  alt="Image"
                  style={{ height: "77.31px", width: "58px" }}
                />
              </Box>
            );
          })}
        </Box>

        <Box sx={style.mainDiv}>
          <Box sx={{ display: { md: "flex", lg: "none", xl: "none" } }}>
            <KeyboardArrowLeftRoundedIcon
              style={{
                color: "white",
                position: "relative",
                left: "2rem",
              }}
              onClick={() => {
                handlePrevious();
              }}
            />
          </Box>
          <Image
            src={carouselData[mainImage]?.image}
            alt="mainImage"
            style={{
              height: "742px",
              width: "100%",
            }}
          />
          <Box sx={{ display: { md: "flex", lg: "none", xl: "none" } }}>
            <KeyboardArrowRightRoundedIcon
              style={{
                display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                color: "white",
                position: "relative",
                right: "2rem",
              }}
              onClick={() => {
                handleNext();
              }}
            />
          </Box>
        </Box>
        <Box sx={style.dotContainer}>
          {carouselData.map((data) => {
            return (
              <Box
                key={data.id}
                sx={style.subDotBox}
                style={{
                  width: mainImage === data.id - 1 && "20px",
                  borderRadius: mainImage === data.id - 1 && "20px",
                  background: mainImage === data.id - 1 && "#F4893B",
                }}
              />
            );
          })}
        </Box>
      </Box>

      <Box sx={style.rightContainer}>
        <Typography sx={style.title}>
          Laugh India 4DFWD <br />X PARLEY RUNNING SHOES
        </Typography>
        <Typography sx={style.price}>Rs 1,250</Typography>
        <Rating name="read-only" value={5} readOnly sx={{ my: "1rem" }} />
        <Box>
          <Typography sx={style.color}>COLOR</Typography>
          <Box
            sx={style.colorBox}
            style={{
              width: selectedColor === 0 && "48px",
              height: selectedColor === 0 && "48px",
              border: selectedColor === 0 && "3px solid black",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: selectedColor === 0 && "32px",
                height: selectedColor === 0 && "32px",
                background: selectedColor === 0 && "black",
                borderRadius: "100%",
              }}
            ></Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={style.color}>SIZE</Typography>
            <Typography>SIZE CHART</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              mt: "1rem",
            }}
          >
            {shoeNumber.map((data) => {
              return (
                <Box
                  key={data?.id}
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "8px",
                    background:
                      selectedColor === data?.id
                        ? "black"
                        : data?.available
                        ? "#D2D1D3"
                        : "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: selectedColor === data?.id ? "#fff" : "black",
                    }}
                  >
                    {data.value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Box
            sx={style.cartButton}
            onClick={() => {
              handleAddToCart();
            }}
          >
            <Typography sx={style.buttonText}>ADD TO CART</Typography>
          </Box>
          <Box
            sx={style.cartButton}
            style={{ width: "10%", justifyContent: "center", display: "flex" }}
          >
            <FavoriteBorderRoundedIcon
              style={{ color: "#fff", textAlign: "center" }}
            />
          </Box>
        </Box>

        <Link href={"/shoppingcart"} style={{ textDecoration: "none" }}>
          <Box
            sx={style.cartButton}
            style={{ background: "#FF9017", my: "1rem", width: "95%" }}
          >
            <Typography sx={style.buttonText}>BUY IT NOW</Typography>
          </Box>
        </Link>

        {children}
      </Box>
    </Box>
  );
};

export default ProductSection;
