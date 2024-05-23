"use server";
import React from "react";
import { Box } from "@mui/material";
import UpperText from "@/components/shoppingCartComponents/upperTexts";
import ShoesData from "@/components/shoppingCartComponents/shoesData";
import CheckoutContainer from "@/components/shoppingCartComponents/checkoutContainer";
import Subscribe from "@/components/HomePage/Subscribe";
import { MobileShoesData } from "@/components/shoppingCartComponents/mobileView";

const ShoppingCart = async () => {
  const styles = {
    subscribe: {
      marginLeft: { lg: "2%" },
      width: { lg: "96%" },
    },
  };
  return (
    <Box sx={{ width: "100%" }}>
      <UpperText />
      <ShoesData Colors={"Blue"} Price={"1250"} />
      <MobileShoesData Price={"1250"} />
      <CheckoutContainer />
      <Box sx={styles.subscribe}>
        <Subscribe />
      </Box>
    </Box>
  );
};

export default ShoppingCart;
