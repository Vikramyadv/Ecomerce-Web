import { PrimaryText } from "@/components/shared/texts";
import { Box } from "@mui/material";
import React from "react";
import {
  ContactDetails,
  DeliveryDetails,
  DiscountApply,
  ShoesBox,
} from "@/components/checkoutComponents/page";
import Subscribe from "@/components/HomePage/Subscribe";
import PaymentInfomation from "@/components/checkoutComponents/page";

const styles = {
  checkoutText: {
    display: "flex",
    justifyContent: "center",
    marginTop: { xs: "13px", lg: "50px" },
    marginBottom: { xs: "40px", lg: "44px" },
  },
  informationContainer: {
    display: { xs: "flex", md: "row" },
    flexDirection: { xs: "column-reverse", lg: "row" },
    width: "100%",
  },
  informationDetails: {
    width: { xs: "100%", lg: "50%" },
  },
};

const CheckoutPage = () => {
  return (
    <>
      <Box
        sx={{
          borderBottom: { xs: "none", lg: "1px solid #000000" },
        }}
      >
        <PrimaryText style={styles.checkoutText}>Checkout</PrimaryText>
      </Box>
      <Box sx={styles.informationContainer}>
        <Box sx={styles.informationDetails}>
          <DiscountApply placeholder="Discount Code" />
          <ContactDetails />
          <DeliveryDetails />
          <PaymentInfomation />
        </Box>
        <ShoesBox Price={1250} />
      </Box>
      <Subscribe />
    </>
  );
};

export default CheckoutPage;
