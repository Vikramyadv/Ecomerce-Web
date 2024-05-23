"use client";
import { Checkbox, Typography, Box, Button, colors } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../Buttons/CustomButton";

const CheckoutContainer = () => {
  const router = useRouter();
  const styles = {
    priceDescription: {
      borderBottom: "1px solid lightgrey",
      width: { xs: "86%", sm: "86%", md: "51%", lg: "49%", xl: "49%" },
      marginLeft: { xs: "5%", sm: "6%", md: "42%", lg: "49%", xl: "49%" },
      marginTop: "44px",
    },
    subTotal: {
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "32px",
      color: "#000000",
      fonFamily: "Volkhov",
    },
    checkout: {
      width: { xs: "84%", sm: "80%", md: "48%", lg: "48%", xl: "48%" },
      marginLeft: { xs: "6%", sm: "10%", md: "43%", lg: "50%", xl: "49%" },
      marginTop: "45px",
    },
    buttonStyles: {
      width: { xs: "175px", md: "48%", lg: "48%", xl: "48%" },
      marginLeft: { xs: "26%", sm: "35%", md: "44%", lg: "50%", xl: "49%" },
      height: { xs: "48px", sm: "48px" },
      marginTop: { xs: "40px", md: "29px" },
      backgroundColor: "black",
      borderRadius: "8px",
      padding: "8px 16px 8px 16px",
      gap: "4px",
      textTransform: "none",
      display: { xs: "flex", md: "block" },
      justifyContent: { xs: "center", md: "center" },
    },
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={styles.priceDescription}>
        <Typography>
          {" "}
          <Checkbox defaultUnchecked />
          For Rs.200 please wrap the product
        </Typography>
      </Box>
      <Box sx={styles.checkout}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={styles.subTotal}>Subtotal</Typography>
          <Typography sx={{ marginLeft: "auto" }}>Rs.1250.00</Typography>
        </Box>
      </Box>

      <Button
        sx={styles.buttonStyles}
        variant="contained"
        onClick={() => {
          router.push("/checkoutpage");
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default CheckoutContainer;
