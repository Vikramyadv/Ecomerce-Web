import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

const ProductCard = ({ data }) => {
  const styles = {
    rootContainer: {
      width: { xs: "40%", sm: "43%", md: "28%", lg: "31%", xl: "28.5%" },
      border: "1px solid #EEEEEE",
      borderRadius: "10px",
      boxShadow: "0px 5px 2px 0px rgba(36, 36, 36, 0.1)",
      minWidth: {
        xs: "300px",
        sm: "250px",
        md: "308px",
        lg: "281px",
        xl: "302px",
      },
      cursor: "pointer",
    },
    shoesImage: {
      width: "100%",
      height: "70%",
      maxWidth: "400px",
      maxHeight: "425px",
      borderBottom: "1px solid #E8E8E8",
    },
    brandContainer: {
      marginLeft: "6%",
    },
    brandBox: {
      display: "flex",
    },
    brand: {
      fontWeight: "800",
      fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "20px", xl: "20px" },
      lineHeight: "24px",
      letterSpacing: "0.5%",
      color: "#FF9017",
      marginTop: "13px",
    },
    brandLowerHeading: {
      fontWeight: "600",
      fontSize: {
        xs: "23px",
        sm: "20px",
        md: "20px",
        lg: "23px",
        xl: "23.5px",
      },
      lineHeight: "28.8px",
      letterSpacing: "0.5%",
      color: "#242424",
      py: "auto",
    },
    sellPrice: {
      fontWeight: "800",
      fontSize: "24px",
      lineHeight: "28.px",
      letterSpacing: "0.5%",
      color: "#242424",
    },
    offerPrice: {
      fontFamily: "avenir",
      fontWeight: "800",
      fontSize: "14px",
      lineHeight: "16.8px",
      letterSpacing: "0.5%",
      color: "#FFA300",
      marginLeft: "auto",
      marginRight: "24px",
      marginTop: "10px",
    },
    heartIcon: {
      marginLeft: "auto",
      marginTop: "13px",
      marginRight: "24px",
    },
    sellOfferPriceBox: {
      display: "flex",
      marginTop: "10px",
    },
  };
  return (
    <Box sx={styles.rootContainer}>
      <Link
        href={`/productpage/${data?.brand}`}
        style={{ textDecoration: "none" }}
      >
        <Image
          style={styles.shoesImage}
          src={data?.displayImage}
          alt={data?.name}
        />

        <Box style={styles.brandContainer}>
          <Box style={styles.brandBox}>
            <Typography style={styles.brand}>{data?.brand}</Typography>
            <FavoriteBorderIcon style={styles.heartIcon} />
          </Box>
          <Typography sx={styles.brandLowerHeading}>{data?.name}</Typography>

          <Box style={styles.sellOfferPriceBox}>
            <Typography style={styles.sellPrice}>
              &#x20b9; {data?.sellPrice}
            </Typography>
            <Typography style={styles.offerPrice}>
              Offer Price ₹ {data?.offerPrice}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
