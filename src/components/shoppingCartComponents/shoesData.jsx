"use server";
import React from "react";
import { Box, Button, Typography, colors } from "@mui/material";
import shoesImage from "@/../../public/Assets/shopPage/shoppingCartShoes.png";
import Image from "next/image";
import { PrimaryText } from "../shared/texts";
import CounterBox from "../shared/counter";

const styles = {
  primaryTextContainer: {
    display: { xs: "row", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
    marginLeft: { xs: "1%", sm: "", md: "2%", lg: "0%", xl: "0%" },
  },
  primaryText: {
    fontSize: "22px",
    margin: "auto",
    marginTop: "75px",
  },
  rootContainer: {
    width: "96%",
    borderBottom: "1px solid lightgrey",
    borderTop: "1px solid lightgray",
    marginTop: "35px",
    marginLeft: { lg: "2%" },
  },
  brandDiscription: {
    fonFamily: "Inter",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "26.63px",
    color: "#000000",
  },
  rootChildContainer: {
    display: "flex",
    marginTop: "35px",
    marginBottom: "44px",
  },
  colorBlue: {
    fontFamily: "Color : Blue",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "42px",
    color: "#8A8A8A",
    marginTop: "15px",
  },
  counterBox: {
    marginLeft: { xs: "1%", sm: "9%", md: "19%", lg: "19%", xl: "19%" },
  },
  removeButton: {
    fontFamily: "Color : Blue",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "42px",
    color: "#8A8A8A",
    textDecoration: "underline",
    marginTop: "14px",
    textTransform: "none",
  },
  priceStyles: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "42px",
    marginLeft: { xs: "1%", sm: "1%", md: "5%", lg: "7%", xl: "13%" },
  },

  finalPrice: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "42px",
    marginLeft: { xs: "1%", sm: "20%", md: "18%", lg: "18%", xl: "19%" },
  },
};
const ShoesData = async ({ Price, Colors }) => {
  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      <Box sx={styles.primaryTextContainer}>
        <PrimaryText style={styles.primaryText}>Product</PrimaryText>
        <PrimaryText style={styles.primaryText}>Price</PrimaryText>
        <PrimaryText style={styles.primaryText}>Quantity</PrimaryText>
        <PrimaryText style={styles.primaryText}>Total</PrimaryText>
      </Box>
      <Box sx={styles.rootContainer}>
        <Box sx={styles.rootChildContainer}>
          <Image src={shoesImage} alt="img" width="100%" />
          <Box sx={{ marginLeft: "1%" }}>
            <Typography sx={styles.brandDiscription}>Denim Shoe-</Typography>
            <Typography sx={styles.brandDiscription}>
              Limited Edition
            </Typography>
            <Typography sx={styles.colorBlue}>Color : {Colors}</Typography>
            <Button sx={styles.removeButton}>Remove</Button>
          </Box>
          <Typography sx={styles.priceStyles}>Rs. {Price}</Typography>
          <Box sx={styles.counterBox}>
            <CounterBox />
          </Box>
          <Typography sx={styles.finalPrice}>Rs. {Price}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoesData;
