import React from "react";
import { PrimaryText, ShadowHeading } from "../shared/texts";
import { Box } from "@mui/material";
const styles = {
  shoppingText: {
    marginTop: "64px",
    justifyContent: "center",
    display: "flex",
  },
  shadowTextBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
};
const UpperText = () => {
  return (
    <>
      <PrimaryText style={styles.shoppingText}>Shopping Cart</PrimaryText>
      <Box style={styles.shadowTextBox}>
        <ShadowHeading>Home &gt;</ShadowHeading>
        <ShadowHeading>Shopping Cart</ShadowHeading>
      </Box>
    </>
  );
};

export default UpperText;
