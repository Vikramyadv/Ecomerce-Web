"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
import { ShadowHeading } from "@/components/shared/texts";
import Accessory from "@/components/mobileAccessory/page";
import { newArrivalcardData } from "@/components/HomePage/NewArrivals/helper";
import ShoeCard from "@/components/shoesCard/page";
import ModalAccordions from "@/components/shopPageMobile/modalAccordions";
import LeftAccordions from "@/components/leftAccordions/page";

const styles = {
  shoesText: {
    fontFamily: "Volkhov",
    fontWeight: 400,
    fontSize: { xs: "35px", md: "40px", lg: "45px", xl: "45px" },
    lineHeight: "32px",
    textAlign: "center",
    color: "#000000",
  },
  filterContainer: {
    display: "flex",
    justifyContent: { xs: "center", md: "center" },
    marginTop: { xs: "13px" },
    marginLeft: { xs: "31%", sm: "41%", md: "36%", lg: "0%" },
  },
  leftAccordions: {
    display: { lg: "none", xl: "none" },
    marginLeft: { xs: "23%", sm: "56%", md: "45%" },
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row ",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "20px",
    mt: "2rem",
    mb: "6rem",
  },
  filterIconStyles: { display: { xs: "block", lg: "none" } },
};
const Page = async () => {
  return (
    <>
      <Box>
        <Box sx={styles.filterContainer}>
          <Typography sx={styles.shoesText}>Shoes</Typography>
          <Box sx={styles.leftAccordions}>
            <ModalAccordions />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: { xs: "5px", md: "8px", lg: "10px", xl: "10px" },
          }}
        >
          <ShadowHeading>Home &gt;</ShadowHeading>
          <ShadowHeading>Shoes &gt;</ShadowHeading>
          <ShadowHeading>Mens Shoes &gt;</ShadowHeading>
          <ShadowHeading>Limited Editions</ShadowHeading>
        </Box>
        <Box sx={{ display: "flex" }}>
          <LeftAccordions />
          <Box sx={{ width: "100%" }}>
            <Accessory />
            <Box
              sx={{
                width: { xs: "96%", md: "94%", lg: "96%", xl: "100%" },
                marginLeft: { xs: "2%", md: "4%", lg: "2%", xl: "0%" },
              }}
            >
              <Box sx={styles.boxContainer}>
                {newArrivalcardData.map((data) => {
                  return <ShoeCard key={data.id} data={data} />;
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
