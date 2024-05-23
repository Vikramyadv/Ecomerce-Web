"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
const style = {
  description: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#232321",
    gap: "1rem",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    mt: "2rem",
  },
  footerTitle: {
    // fontFamily: "Inter",
    fontSize: "1rem",
    fontWeight: "600",
    paragraph: "1px",
  },
};

const ProductSectionServerComp = async () => {
  return (
    <>
      <Box sx={style.footer}>
        <Typography sx={style.footerTitle}>ABOUT THE PRODUCT</Typography>
      </Box>
      <Box sx={style.description}>
        <Typography sx={style.description}>Shadow Navy / Army Green</Typography>
        <br />
        <Typography sx={style.description}>
          This product is excluded from all promotional discounts and offers.
        </Typography>

        <ul
          style={{
            maxWidth: "510px",
            // listStyleType: "circle",
            marginLeft: "-1rem",
            listStylePosition: "outside",
          }}
        >
          {" "}
          <li>
            Pay over time in interest-free installments with Affirm, Klarna or
            Afterpay.
          </li>{" "}
          <li>
            Join adiClub to get unlimited free standard shipping, returns, &
            exchanges.
          </li>
        </ul>
      </Box>
    </>
  );
};

export default ProductSectionServerComp;
