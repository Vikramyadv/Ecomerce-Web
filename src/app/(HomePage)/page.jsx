"use server";
import React from "react";
import { Box } from "@mui/material";
import HeroSection from "@/components/HomePage/Herosection.jsx";
import NewArrivals from "@/components/HomePage/NewArrivals/NewArrivals";
import ExploreSection from "@/components/HomePage/ExploreSection/ExploreSection";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FollowUs from "@/components/HomePage/FollowUs/FollowUs";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import Subscribe from "@/components/HomePage/Subscribe";
import DealsOfTheMonth from "@/components/HomePage/DealsOfTheMonth/DealsOfTheMonth";

const Page = async () => {
  return (
    <Box sx={{ width: "100%" }}>
      <HeroSection />
      <DealsOfTheMonth />
      <NewArrivals />
      <ExploreSection />
      <AboutUs />
      <FollowUs />
      <Testimonials />
      <Subscribe />
    </Box>
  );
};

export default Page;
