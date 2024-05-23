import LoginInputs, {
  IconLogin,
  MobileHeading,
  UserDetails,
} from "@/components/RegisterComponents/page";
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
    height: "800px",
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
    // display: "ruby",
  },
};

const Register = () => {
  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.leftBanner}></Box>
      <Box sx={styles.loginDetails}>
        <MobileHeading content={"Register"}></MobileHeading>
        <UserDetails />
        <IconLogin />
      </Box>
    </Box>
  );
};

export default Register;
