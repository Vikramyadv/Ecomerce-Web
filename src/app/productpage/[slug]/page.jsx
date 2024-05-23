"use server";
import React from "react";
import ProductSection from "@/components/ProductPage/ProductSection/ProductSection";
import ExploreSection from "@/components/ProductPage/ExploreSection/ExploreSection";
import PeopleAlsoLike from "@/components/HomePage/NewArrivals/NewArrivals";
import Subscribe from "@/components/HomePage/Subscribe";
import ProductSectionServerComp from "@/components/ProductPage/ProductSection/ProductSectionServerComp.jsx";

import { Box } from "@mui/material";

const page = async () => {
  return (
    <Box width={"100%"}>
      <ProductSection>
        <ProductSectionServerComp />
      </ProductSection>
      <ExploreSection />
      <PeopleAlsoLike title="People Also Like" />
      <Subscribe />
    </Box>
  );
};

export default page;
