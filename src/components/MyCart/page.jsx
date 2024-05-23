"use client";
import {
  Box,
  Button,
  Checkbox,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import shoesImage from "@/../../public/Assets/shopPage/checkoutShoesImage.png";
import Image from "next/image";
import { PrimaryText } from "@/components/shared/texts";
import CounterBox from "@/components/shared/counter";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
const styles = {
  modalContainer: {
    marginLeft: "auto",
    width: { xs: "95%", sm: "62%", md: "56%", lg: "42%", xl: "35%" },
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    outline: "none",
    borderRadius: "10px",

    overflow: "auto",
  },
  closeButton: {
    color: (theme) => theme.palette.grey[500],
  },
  rootContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: "auto",
  },
  checkoutText: {
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: { xs: "12px", sm: "15px" },
    fontSize: { xs: "24px", md: "42px" },
  },
  freeShippingDescription: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: { xs: "17px", md: "25px", lg: "26px" },
    // lineHeight: { xs: "25px", md: "32px" },
  },
  shoesContainer: {
    display: "flex",
    backgroundColor: { xs: "#FFFFFF" },
    border: { xs: "1px solid #EEEEEE" },
    borderRadius: "5px",
    border: "1px solid #FFFFFF",
    borderBottom: "1px solid #FFFFFF",
    boxShadow: "4px 4px 4px 4px rgba(36, 36, 36, 0.1)",
    marginTop: "30px",
  },
  LimitedEdition: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: { xs: "17px", sm: "17px", md: "22px" },
    lineHeight: { xs: "30px", md: "42px" },
    color: "#000000",
  },
  colorStyles: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: { xs: "17px", sm: "22px" },
    lineHeight: "42px",
    color: "#8A8A8A",
  },
  counterStyles: {
    display: "flex",
    backgroundColor: "#F1F1F1",
    borderRadius: "5px",
    width: { xs: "60%", sm: "45%", md: "45%", lg: "45%", xl: "45%" },
    gap: { xs: "10%", sm: "25%", md: "29%", lg: "29%", xl: "29%" },
    marginTop: "10px",
  },
  wrapText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: { xs: "16px", md: "22px" },
    lineHeight: "42px",
    color: "#8A8A8A",
    borderBottom: "1px solid #8A8A8A",
    marginTop: "55px",
    width: { xs: "90%", md: "94%" },
  },
  SubtotalStyles: {
    fontFamily: "Volkhov",
    fontWeight: "400",
    fontSize: { xs: "16px", md: "22px" },
    lineHeight: "32px",
    color: "#000000",
  },
  buttonStyles: {
    backgroundColor: "#FF9017",
    borderRadius: "10px",
    boxShadow: "0px 20px 35px 0px #00000026",
    width: { xs: "94%" },
    height: { xs: "45px", lg: "50px", xl: "50px  " },
    marginBottom: "50px",
    marginTop: "31px",
    textTransform: "none",
  },
};
const ViewCart = ({ setViewCartVisible }) => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setViewCartVisible(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={styles.modalContainer}
    >
      <Box sx={styles.modalContent}>
        <DialogTitle sx={{ marginBottom: "5%", float: "right" }}>
          <IconButton onClick={handleClose} style={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Box sx={styles.rootContainer}>
          <Box sx={{ marginLeft: "1%" }}>
            <PrimaryText style={styles.checkoutText}>Shopping Cart</PrimaryText>
            <Typography sx={styles.freeShippingDescription}>
              Buy Rs 200 more and get free shipping
            </Typography>
            <Box sx={styles.shoesContainer}>
              <Box
                sx={{
                  width: { xs: "222px", md: "168px" },
                  height: { xs: "184px", md: "235px" },
                  marginBottom: { xs: "12px", md: "12px" },
                }}
              >
                <Image
                  src={shoesImage}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>

              <Box sx={{ marginLeft: "4%" }}>
                <Typography sx={styles.LimitedEdition}>
                  Denim Shoe- Limited Edition
                </Typography>
                <Typography sx={styles.colorStyles}>Color : Blue</Typography>
                <Typography sx={styles.LimitedEdition}>Rs. 1250</Typography>
                <Box sx={styles.counterStyles}>
                  <CounterBox styles={{ border: "none" }} />
                </Box>
              </Box>
            </Box>

            <Typography sx={styles.wrapText}>
              {" "}
              <Checkbox defaultUnchecked /> For Rs.200 please wrap the product
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginTop: { xs: "40px", md: "48px" },
                width: { xs: "90%", md: "94%" },
              }}
            >
              <Typography sx={styles.SubtotalStyles}>Subtotal</Typography>
              <Typography
                sx={styles.SubtotalStyles}
                style={{ marginLeft: "auto" }}
              >
                Rs 1250.00
              </Typography>
            </Box>
            <Button sx={styles.buttonStyles} variant="contained">
              View Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ViewCart;
