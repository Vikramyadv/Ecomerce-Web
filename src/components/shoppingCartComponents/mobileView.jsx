import { Box, Button, Typography } from "@mui/material";
import React from "react";
import shoesImage from "@/../../public/Assets/shopPage/checkoutShoesImage.png";
import Image from "next/image";
import CounterBox from "../shared/counter";

export const MobileShoesData = ({ Price }) => {
  const styles = {
    shoesContainer: {
      marginLeft: { xs: "2%", sm: "5%", md: "5%", lg: "6%", xl: "7%" },
      marginTop: { xs: "37px", lg: "50px" },
      display: { xs: "flex" },
    },
    shoeRightContent: {
      display: { xs: "column", md: "flex" },
      width: { xs: "54%", md: "70%" },
    },

    brandDescriptionContainer: {
      marginLeft: { xs: "8%", sm: "5%", lg: "3%" },
      marginTop: { xs: "11%", sm: "8%", lg: "6%" },
    },
    brandDescription: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "26.63px",
      color: "#000000",
      flexWrap: "wrap",
    },
    colorStyles: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "19.36px",
      color: "#484848",
      marginTop: "10px",
      marginBottom: "20px",
    },
    priceStyles: {
      marginLeft: { xs: "8%", sm: "5%", md: "5%", lg: "6%", xl: "8%" },
      marginTop: "6%",
      fontFamily: "Inter",
      fontWeight: { xs: "600", lg: "400" },
      fontSize: { xs: "24px", lg: "16px" },
      lineHeight: "19.36px",
      marginTop: { xs: "11%", md: "18%" },
    },
    imageStyles: {
      width: { xs: "168px", lg: "145px" },
      height: { xs: "225px", lg: "137px" },
    },
    rootContainer: {
      width: { xs: "93%", md: "85%", lg: "50%" },
      backgroundColor: { xs: "#FFFFFF", md: "#F5F5F5" },
      height: { xs: "350px", lg: "147vh" },
      marginLeft: { xs: "3%", md: "8%", lg: "0%" },
      border: { xs: "1px solid #EEEEEE" },
      borderRadius: "5px",
      border: "1px solid #FFFFFF",
      borderBottom: "1px solid #FFFFFF",
      boxShadow: "4px 4px 4px 4px rgba(36, 36, 36, 0.1)",
      display: { lg: "none" },
      marginTop: "30px",
    },
    removeButton: {
      fontFamily: "Color : Blue",
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "42px",
      color: "#8A8A8A",
      textDecoration: "underline",
      marginTop: "14px",
      marginLeft: { xs: "4%" },
      textTransform: "none",
    },
  };
  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.shoesContainer}>
        <Box sx={styles.imageStyles}>
          <Image
            src={shoesImage}
            alt="shoes image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box sx={styles.shoeRightContent}>
          <Box sx={styles.brandDescriptionContainer}>
            <Typography sx={styles.brandDescription}>
              Denim Shoe- Limited Edition
            </Typography>
            <Typography sx={styles.colorStyles}>Color: Blue</Typography>
            <CounterBox />
          </Box>
          <Typography sx={styles.priceStyles}>Rs. {Price}</Typography>
        </Box>
      </Box>
      <Button sx={styles.removeButton}>Remove</Button>
    </Box>
  );
};
