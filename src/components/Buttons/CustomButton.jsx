"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import nextIcon from "@/../../public/Assets/Login/nextIcons.svg";

const styles = {
  rootContainer: {
    padding: { xs: "12px 23px", sm: "12px 23px", md: "15px 60px" },
    backgroundColor: "black",
    boxShadow: "0px 20px 35px 0px #00000026",
    borderRadius: "10px",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  description: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "400",
    // fontFamily: "Inter",
  },
};

const CustomButton = ({ content }) => {
  // const router = useRouter();

  return (
    <Box sx={styles.rootContainer}>
      <Typography sx={styles.description}>{content}</Typography>
    </Box>
  );
};

export const BottomLineButton = ({ content, styles }) => {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
      sx={{
        color: "#000000",
        fontFamily: "Inter",
        fontWeight: "600",
        lineHeight: "16px",
        marginTop: "20px",
        ...styles,
      }}
    >
      {content}
    </Link>
  );
};

export const PrimaryButton = ({ content, style }) => {
  return (
    <Box>
      <Button
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 16px 8px 16px",
          gap: "4px",
          color: "#FFFFFF",
          backgroundColor: "#000000",
          width: { xs: "175px" },
          height: { xs: "48px" },
          ...style,
        }}
        variant="contained"
      >
        {content}
      </Button>
    </Box>
  );
};

export const NextIconButton = ({ content, style }) => {
  return (
    <Box>
      <Button
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 16px 8px 16px",
          gap: "4px",
          color: "#FFFFFF",
          backgroundColor: "#000000",
          width: { xs: "175px", md: "90%", lg: "84%", xl: "84%" },
          height: { xs: "48px" },
          ...style,
          display: "flex",
          justifyContent: "space-between",
        }}
        variant="contained"
      >
        <Typography>{content}</Typography>
        <Image src={nextIcon} alt="nextIcon" />
      </Button>
    </Box>
  );
};

export default CustomButton;
