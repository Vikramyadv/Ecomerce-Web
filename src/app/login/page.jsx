import {
  LoginDetails,
  LoginIconButton,
} from "@/components/RegisterComponents/login";
import { Icons, MobileHeading } from "@/components/RegisterComponents/page";
import { Box } from "@mui/material";
import React from "react";

const styles = {
  rootContainer: {
    width: "100%",
    marginTop: { xs: "50px", md: "60px" },
    display: { xs: "flex" },
  },
  leftBanner: {
    backgroundColor: "#FF9017",
    width: "20%",
    height: "700px",
    borderRadius: "26px",
    marginLeft: "10%",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    display: { xs: "none", md: "block" },
  },
  loginDetails: {
    width: { xs: "95%", md: "50%" },
    borderRadius: "26px",
    backgroundColor: "#FFFFFF",
  },
};

const Register = () => {
  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.leftBanner}></Box>

      <Box sx={styles.loginDetails}>
        <MobileHeading content={"Login"}></MobileHeading>
        <LoginDetails />
        <Icons />
        <LoginIconButton />
      </Box>
    </Box>
  );
};

export default Register;
