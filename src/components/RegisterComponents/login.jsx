import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { BottomLineButton, NextIconButton } from "../Buttons/CustomButton";
import LoginInputs from "./page";

export const LoginDetails = () => {
  const styles = {
    inputBox: {
      padding: "10px 16px 10px 16px",
      borderRadius: "8px",
      fontSize: { xs: "16px" },
      fontWeight: "400",
      fontFamily: "Inter",
      letterSpacing: "0.5px",
    },
    passwordRestriction: {
      fontFamily: "Inter",
      fontWeight: { xs: "400" },
      fontSize: { xs: "12px" },
      lineHeight: "14.52px",
      letterSpacing: "0.4px",
    },
    termContainer: {
      display: "flex",
      marginTop: "20px",
      marginLeft: { xs: "1%", sm: "8%", md: "10%" },
    },

    termConditions: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "16.94px",
      marginTop: "12px",
      //   marginLeft: { xs: "20px", md: "11%" },
    },
  };
  return (
    <>
      <Box
        sx={{
          marginLeft: { xs: "20px", md: "10%" },
          marginTop: { xs: "50px" },
        }}
      >
        <LoginInputs
          styles={styles.inputBox}
          label={"Login Details"}
          placeholder={"Email/Mobile Number"}
        ></LoginInputs>

        <LoginInputs
          styles={styles.inputBox}
          placeholder={"Password"}
        ></LoginInputs>
        <BottomLineButton
          styles={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19.36px",
          }}
          content={"Forgot your password?"}
        ></BottomLineButton>
        <MoreInfo />
      </Box>
    </>
  );
};

export const MoreInfo = () => {
  const styles = {
    termContainer: {
      display: "flex",
      marginTop: "20px",
    },

    termConditions: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "16.94px",
      marginTop: "12px",
    },
    registerButton: {
      marginLeft: { md: "11%" },
      marginTop: "24px",
    },
  };
  return (
    <>
      <Box sx={styles.termContainer}>
        <Checkbox defaultUnchecked />
        <Typography sx={styles.termConditions}>
          Keep me logged in - applies to all log in options below. More info
        </Typography>
      </Box>
      <Box sx={styles.termContainer}>
        <Checkbox defaultUnchecked />
        <Typography sx={styles.termConditions}>
          By clicking 'Log In' you agree to our website Terms & Conditions,
          Privacy Notice and Terms of use.
        </Typography>
      </Box>
    </>
  );
};

export const LoginIconButton = () => {
  const styles = {
    registerButton: {
      marginLeft: { md: "11%" },
      marginTop: "24px",
      width: { xs: "350px", sm: "500px", md: "90%", lg: "84%", xl: "84%" },
    },
  };
  return (
    <Box
      sx={{ display: { xs: "flex", md: "block", justifyContent: "center" } }}
    >
      <NextIconButton
        style={styles.registerButton}
        content={"LOGIN"}
      ></NextIconButton>
    </Box>
  );
};
