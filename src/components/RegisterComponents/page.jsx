import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import googleIcon from "@/../../public/Assets/Login/googleIcon.svg";
import facebookIcon from "@/../../public/Assets/Login/facebookIcon.svg";
import appleIcon from "@/../../public/Assets/Login/appleIcon.svg";
import Image from "next/image";
import RegisterButton, { NextIconButton } from "../Buttons/CustomButton";

const LoginInputs = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  styles,
  onFocus,
  onBlur,
  account1,
  account2,
}) => {
  return (
    <Box sx={{ width: "91%", position: "relative" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            fontFamily: "Volkhov",
            fontWeight: "700",
            fontSize: "25px",
            lineHeight: "30.96px",
            color: "#232321",
            // marginTop: "40px",
          }}
        >
          {label}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>{account1}</Typography>
          <Typography>{account2}</Typography>
        </Box>
      </Box>
      <Box>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          className="custom-input"
          style={{
            width: "100%",
            padding: "16px",
            height: "38px",
            border: "1px solid #8A8A8A",
            margin: "12px 0",
            boxShadow: "0px 4px 4px 0px #9A9A9A1A",
            ...styles,
          }}
        />
      </Box>
    </Box>
  );
};

export const UserDetails = () => {
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
          label={"Your Info"}
          placeholder={"Name"}
        ></LoginInputs>
        <LoginInputs
          styles={styles.inputBox}
          placeholder={"Mobile Number"}
        ></LoginInputs>
        <Box sx={{ marginTop: "40px" }}>
          <LoginInputs
            styles={styles.inputBox}
            label={"Login Details"}
            placeholder={"Name"}
          ></LoginInputs>
        </Box>
        <LoginInputs
          styles={styles.inputBox}
          placeholder={"Password"}
        ></LoginInputs>
        <Typography sx={styles.passwordRestriction}>
          Minimum 8 characters with at least one uppercase, one lowercase, one
          special character and a number
        </Typography>
      </Box>
    </>
  );
};

export const IconLogin = () => {
  const styles = {
    rootContainer: {
      marginTop: "24px",
    },
    orStyles: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24.2px",
      alignItem: "Center",
      display: "flex",
      justifyContent: "center",
    },
    iconContainer: {
      marginTop: "24px",
      display: "flex",
      justifyContent: "center",
      gap: { xs: "10px", md: "10px", lg: "10px" },
      marginLeft: { md: "10%", lg: "3.5%" },
    },
    iconBox: {
      border: "1px solid #232321",
      padding: { xs: "16px 41px 16px 31px", sm: "16px 0px 16px 57px" },
      borderRadius: "12px",
      width: { xs: "22px", sm: "85px" },
      height: { xs: "30px" },
    },
    termContainer: {
      display: "flex",
      marginTop: "20px",
      marginLeft: { xs: "1%", sm: "8%", md: "10%" },
    },
    infoContainer: {
      display: { xs: "flex", md: "none" },
      marginTop: "20px",
      marginLeft: { xs: "1%", sm: "8%", md: "10%" },
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
      width: { xs: "350px", sm: "500px", md: "90%", lg: "84%", xl: "84%" },
    },
  };
  return (
    <Box sx={styles.rootContainer}>
      <Icons />
      <Box sx={styles.termContainer}>
        <Checkbox defaultUnchecked />
        <Typography sx={styles.termConditions}>
          By clicking 'Log In' you agree to our website Terms & Conditions,
          Privacy Notice and Terms of use.
        </Typography>
      </Box>
      <Box sx={styles.infoContainer}>
        <Checkbox defaultUnchecked />
        <Typography sx={styles.termConditions}>
          Keep me logged in - applies to all log in options below. More info
        </Typography>
      </Box>
      <Box
        sx={{ display: { xs: "flex", md: "block", justifyContent: "center" } }}
      >
        <NextIconButton
          style={styles.registerButton}
          content={"REGISTER"}
        ></NextIconButton>
      </Box>
    </Box>
  );
};

export const Icons = () => {
  const styles = {
    orStyles: {
      fontFamily: "Inter",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24.2px",
      alignItem: "Center",
      display: "flex",
      justifyContent: "center",
      marginTop: "24px",
    },
    iconContainer: {
      marginTop: "24px",
      display: "flex",
      justifyContent: "center",
      gap: { xs: "10px", md: "10px", lg: "10px" },
      marginLeft: { md: "10%", lg: "3.5%" },
    },
    iconBox: {
      border: "1px solid #232321",
      padding: { xs: "16px 41px 16px 31px", sm: "16px 0px 16px 57px" },
      borderRadius: "12px",
      width: { xs: "22px", sm: "85px", md: "92px", lg: "93px", xl: "93px" },
      height: { xs: "30px" },
    },
  };
  return (
    <>
      <Typography sx={styles.orStyles}>OR</Typography>
      <Box sx={styles.iconContainer}>
        <Box sx={styles.iconBox}>
          <Image src={googleIcon} alt="googleIcon" />
        </Box>
        <Box sx={styles.iconBox}>
          <Image src={appleIcon} alt="appleIcon" />
        </Box>{" "}
        <Box sx={styles.iconBox}>
          <Image src={facebookIcon} alt="facebookIcon" />
        </Box>
      </Box>
    </>
  );
};

export const MobileHeading = ({ content }) => {
  return (
    <Box sx={{ display: { md: "none" } }}>
      <Typography
        sx={{
          fontFamily: "Volkhov",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30.96px",
          color: "#232321",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {content}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "19.36px",
          color: "#232321",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Sign up with
      </Typography>
    </Box>
  );
};

export default LoginInputs;
