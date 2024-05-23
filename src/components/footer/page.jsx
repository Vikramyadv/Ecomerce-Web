import React from "react";
import { Box, Typography } from "@mui/material";
const styles = {
  textStyles: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.36px",
    color: "#484848",
    marginLeft: { xs: "40px", sm: "40px", md: "40px", lg: "43px" },
    marginTop: "34px",
  },
  rootContainer: {
    marginTop: "34px",
    borderTop: "1px solid #DEDFE1",
    marginTop: "200px",
    width: "100%",
  },
  copyrightStyles: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#484848",
    display: "flex",
    justifyContent: "center",
    marginTop: "59px",
    marginBottom: { xs: "100px", sm: "100px", md: "30px" },
  },
};

const Footer = () => {
  return (
    <Box sx={styles.rootContainer}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: { xs: "1%", sm: "30%", md: "50%" },
        }}
      >
        <Typography sx={styles.textStyles}>Support Center</Typography>
        <Typography sx={styles.textStyles}>Invoicing</Typography>
        <Typography sx={styles.textStyles}>Contract</Typography>
        <Typography sx={styles.textStyles}>Careers</Typography>
        <Typography sx={styles.textStyles}>Careers</Typography>
        <Typography sx={styles.textStyles}>FAQ,s</Typography>
      </Box>
      <Typography sx={styles.copyrightStyles}>
        copyright @2024 ABC .All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
