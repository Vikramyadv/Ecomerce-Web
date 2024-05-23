import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Icon1 from "@/../../public/Assets/shopPage/Icon1.svg";
import Icon2 from "@/../../public/Assets/shopPage/Icon2.svg";
import Image from "next/image";

const Accessory = () => {
  <Accordion slotProps={{ transition: { unmountOnExit: true } }} />;
  const styles = {
    rootContainer: {
      mx: "auto",
      width: "95%",
      // height: { xs: "4%", md: "4%", lg: "4%", xl: "4%" },
      border: "1px solid #DEE2E7",
      borderRadius: "6px",
      mt: "11%",
      display: { xs: "none", lg: "flex" },
    },
    childContainer: {
      display: "flex",
      marginLeft: "auto",
    },

    itemText: {
      display: "flex",
      marginLeft: "20px",
      marginTop: "21px",
      marginBottom: "20px",
    },
    mobileAccessory: {
      fontWeight: "600",
      fontSize: "16px",
      fontFamily: "Inter",
      lineHeight: "19.36px",
      color: "#1C1C1C",
      marginLeft: "5px",
    },
    mobileItem: {
      fontSize: "16px",
      fontFamily: "Inter",
      lineHeight: "19.36px",
      color: "#1C1C1C",
      fontWeight: "200",
    },
    verifiedOnly: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "19.36px",
      marginTop: "11px",
      maginBottom: "12px",
      marginRight: "50px",
    },
    featuredBox: {
      width: "172px",
      height: "30px",
      border: "1px solid #DEE2E7",
      marginTop: "5.5px",
      marginRight: "50px",
    },
    iconBox: {
      width: "76px",
      height: "40px",
      border: "1px solid #DEE2E7",
      display: "flex",
      justifyContent: "center",
      gap: "5px",
      margin: "10px",
      borderRadius: "7px",
      alignItems: "center",
    },
  };

  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.itemText}>
        <Typography sx={styles.mobileItem}>12,911 items in</Typography>
        <Typography sx={styles.mobileAccessory}>Mobile accessory</Typography>
      </Box>

      <Box sx={styles.childContainer}>
        <Typography sx={styles.verifiedOnly}>
          {" "}
          <Checkbox defaultUnchecked />
          Verified only
        </Typography>
        <Box sx={styles.featuredBox}>
          <Accordion defaultunExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Featured</Typography>
            </AccordionSummary>
          </Accordion>
        </Box>
        <Box sx={styles.iconBox}>
          <Image src={Icon1} width={24} height={24} alt="img" marginTop={7} />
          <Image src={Icon2} width={24} height={24} alt="img" />
        </Box>
      </Box>
    </Box>
  );
};

export default Accessory;
