import React from "react";
import { Box } from "@mui/material";
import { PrimaryButton } from "@/components/Buttons/CustomButton";
import CustomInput from "@/components/shared/customInput";

const styles = {
  buttonRootContainer: {
    display: { xs: "row", sm: "flex", md: "flex", lg: "flex", xl: "flex%" },
    alignItems: "center",
    gap: { xs: "", sm: "9%", md: "9%", lg: "7.5%", xl: "7.5%" },
  },
};
const DiscountBox = () => {
  return (
    <Box sx={styles.buttonRootContainer}>
      <CustomInput
        styles={{ border: "none", height: "31px" }}
        placeholder={"Discount code"}
      />
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <PrimaryButton
          style={{ width: "161px", height: "66px" }}
          content={"Apply"}
        />
      </Box>
    </Box>
  );
};

export default DiscountBox;
