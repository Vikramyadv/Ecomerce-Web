"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosNewRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { testimonialData } from "./helper";
import Timer from "./Timer";
import { fontGrid } from "@mui/material/styles/cssUtils";
const style = {
  rootContainer: {
    width: "100%",

    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      sm: "column-reverse",
      md: "row",
      lg: "row",
      xl: "row",
    },
    justifyContent: "center",
    pt: "9rem",
    pb: "9rem",
    background: "#FAFAFA",
  },
  title: {
    fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
    fontWeight: "400",
    fontFamily: "Volkhov",
  },
  description: {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#8A8A8A",
    my: "1rem",
    mb: "2rem",
    maxWidth: "436px",
  },
  carouselDiv: {
    maxWidth: "1155px",
    display: "flex",
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
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  leftContainer: {
    display: { xs: "flex", lg: "flex" },
    flexDirection: "column",
    px: "1rem",
    marginTop: { xs: "56px", md: "0px" },
    alignItems: { xs: "center" },
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    width: { xs: "96%", sm: "100%", md: "70%", lg: "70%", xl: "70%" },
    marginLeft: { xs: "2%", md: "0px" },
  },
  subText: {
    fontWeight: "500",
    fontSize: { xs: "18px", sm: "20px", md: "1.75rem" },
    my: "2rem",
  },
  buttonDiv: {
    width: "fit-content",
    display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "1rem",
  },
  buttonBox: {
    width: "50px",
    height: "50px",
    background: "#FFFFFF",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 14px 1px #00000029",
  },
  testimonialImage: {
    height: "auto",
    width: { xs: "40%" },
    backgroundRepeat: "no-repeat",
  },
  subLeftContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: { xs: "99%", sm: "100%", md: "90%", lg: "90%", xl: "90%" },
    position: "relative",
    // alignItems: "center",
  },
  subLeftInnerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    width: "98%",
    transition: "left 0.4s ease-in-out",
  },
  subTestimonialImage: {
    maxWidth: { xs: "97px", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
    width: { xs: "68%", md: "66%", lg: "70%", xl: "60%" },
    height: { xs: "38%", sm: "19%", md: "19%", lg: "20%", xl: "20%" },
    background: "white",
    position: "absolute",
    zIndex: "1",
    bottom: { xs: "6.18px", md: "1rem" },
    marginLeft: { xs: "9px", sm: "9px", md: "10px", lg: "12px", xl: "24px" },
    display: "flex",
    px: { xs: "10px", sm: "10px", md: "1rem" },
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },

  testimonialOffer: {
    fontWeight: { xs: "400", md: "600", lg: "400" },
    fontSize: { xs: "16px", sm: "16px", md: "20px", lg: "28px" },
    fontFamily: "Inter",
  },
  divider: {
    height: "1px",
    width: "15%",
    background: "#484848",
  },
  offerType: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "center",
  },
  typestyle: {
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#484848",
    fontSize: { xs: "10px", sm: "12px", md: "16px", lg: "16px", xl: "20px" },
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    position: "absolute",
    left: "calc(32.5% + 1rem)",
    top: { xs: "150px", sm: "335px", md: "560px", lg: "560px" },
    alignItems: "center",
  },
  subDotContainer: {
    height: "11px",
    width: "11px",
    background: "#B6B6B6",
    borderRadius: "100%",
  },
};

const DealsOfTheMonth = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(testimonialData);

  let numberofSlides = 3;
  const active = 0;

  const handleNext = () => {
    setTestimonial((testimonials) => {
      const first = testimonials[0];
      const newTestimonials = testimonials.slice(1, testimonials.length);
      return [...newTestimonials, first];
    });
    if (currentIndex >= testimonialData.length - 1) {
      setCurrentIndex(0);
      setDotIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setDotIndex(dotIndex + 1);
    }
  };

  const handlePrevious = () => {
    setTestimonial((testimonials) => {
      const last = testimonials[testimonials.length - 1];
      const newTestimonials = testimonials.slice(0, testimonials.length - 1);
      return [last, ...newTestimonials];
    });
    if (currentIndex < 0) {
      setCurrentIndex(testimonialData.length - 1);
      setDotIndex(testimonialData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
      setDotIndex(dotIndex - 1);
    }
  };

  const handleClick = (id, len) => {
    setCurrentIndex(id);
    setTestimonial(testimonialData);
    // Update the testimonials array based on the new current index
    setTestimonial((testimonials) => {
      const newTestimonials = [...testimonials];
      const selectedTestimonial = newTestimonials.splice(id, 1)[0];
      newTestimonials.unshift(selectedTestimonial);
      return newTestimonials;
    });

    // Update the dot index based on the new current index
    setDotIndex(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.leftContainer}>
        <Typography sx={style.title}>Deals Of The Month</Typography>
        <Typography sx={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </Typography>
        <CustomButton content="Buy Now" />
        <Typography sx={style.subText}>Hurry, Before It’s Too Late!</Typography>
        <Timer />
      </Box>
      <Box sx={style.rightContainer}>
        <Box sx={style.buttonDiv}>
          <ButtonBase sx={style.buttonBox} onClick={() => handlePrevious()}>
            <ArrowBackIosNewRoundedIcon />
          </ButtonBase>
          <ButtonBase sx={style.buttonBox} onClick={() => handleNext()}>
            <ArrowForwardIosNewRoundedIcon />
          </ButtonBase>
        </Box>
        <Box sx={style.subLeftContainer}>
          <Box sx={style.subLeftInnerContainer}>
            {" "}
            {testimonial.slice(0, 3).map((data, idx) => {
              return (
                <Box
                  key={idx}
                  sx={{
                    height: "auto",
                    width: "32%", // Default width for all screen sizes
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${data?.image?.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: {
                      xs: idx === active ? "180px" : "130px",
                      sm: idx === active ? "368px" : "313px",
                      md: idx === active ? "590px" : "486px",
                    },
                    position: "relative",
                  }}
                >
                  <Box
                    sx={style.subTestimonialImage}
                    style={{ display: idx === active ? "flex" : "none" }}
                  >
                    <Box sx={style.offerType}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "16px",
                            lg: "16px",
                            xl: "20px",
                          },
                        }}
                      >
                        {data?.id}
                      </Typography>{" "}
                      <Box sx={style.divider} />
                      <Typography sx={style.typestyle}>{data?.type}</Typography>
                    </Box>
                    <Typography sx={style.testimonialOffer}>
                      {data?.offer}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={style.dotContainer}>
            {testimonialData.map((data, idx) => {
              return (
                <Box
                  sx={style.subDotContainer}
                  key={idx}
                  style={{
                    width: idx === dotIndex && "27px",
                    height: idx === dotIndex && "27px",
                    borderRadius: "100%",
                    border: idx === dotIndex && "1px solid #000000",
                    backgroundColor: idx === dotIndex ? "#FFFFFF" : "#B6B6B6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleClick(idx, testimonialData.length - 1)}
                >
                  <Box
                    sx={style.subDotContainer}
                    style={{ background: idx === dotIndex && "#000000" }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DealsOfTheMonth;
