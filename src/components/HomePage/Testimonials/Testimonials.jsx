"use client";
import React, { useState } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { testimonialData } from "./helper";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosNewRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import TestimonialCard from "@/components/card/testimonialCard";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});
import { config } from "react-spring";

const style = {
  rootContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "4rem",
    flexDirection: "column",
    mb: "2rem",
    background: "#FAFAFA",
  },
  title: {
    fontSize: { xs: "24px", md: "3rem" },
    fontWeight: "400",
    fontFamily: "Volkhov",
    mt: "5rem",
  },
  description: {
    fontSize: { xs: "12px", md: "1rem" },
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#8A8A8A",
    my: "1rem",
    maxWidth: "614px",
    textAlign: "center",
    lineHeight: "15px",
  },
  carouselDiv: {
    mt: "4rem",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBox: {
    width: { xs: "73%", md: "60%", lg: "80%" },
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
  buttonDiv: {
    mb: "4rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    // position: "absolute",
    // top: "350px",
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
};

const Testimonials = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: false,
    config: config.gentle,
  });

  let slides = testimonialData
    .map((data, index) => {
      return {
        key: index,
        content: <TestimonialCard data={data} key={index} idx={index} />,
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setState({ goToSlide: index }) };
    });

  const onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  const handleNext = () => {
    setState((prevState) => {
      const newIndex = prevState.goToSlide + 1;
      const lastIndex = testimonialData.length - 1;
      const nextIndex = newIndex > lastIndex ? 0 : newIndex;
      return { goToSlide: nextIndex };
    });
  };

  const handlePrevious = () => {
    setState((prevState) => {
      const newIndex = prevState.goToSlide - 1;
      const lastIndex = testimonialData.length - 1;
      const prevIndex = newIndex < 0 ? lastIndex : newIndex;
      return { goToSlide: prevIndex };
    });
  };

  return (
    <Box sx={style.rootContainer}>
      <Typography sx={style.title}>This Is What Our Customers Say</Typography>
      <Typography sx={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
      </Typography>
      <div
        style={{
          width: "70%",
          height: "400px",
          margin: "0 auto",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div>
      <Box sx={style.buttonDiv}>
        <ButtonBase sx={style.buttonBox} onClick={() => handlePrevious()}>
          <ArrowBackIosNewRoundedIcon />
        </ButtonBase>
        <ButtonBase sx={style.buttonBox} onClick={() => handleNext()}>
          <ArrowForwardIosNewRoundedIcon />
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default Testimonials;
