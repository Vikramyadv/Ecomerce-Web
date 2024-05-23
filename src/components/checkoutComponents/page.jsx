import { Box, Typography } from "@mui/material";
import React from "react";
import CustomInput from "@/components/shared/customInput";
import Checkbox from "@mui/material/Checkbox";
import shoesImage from "@/../../public/Assets/shopPage/checkoutShoesImage.png";
import Image from "next/image";
import { BottomLineButton, PrimaryButton } from "../Buttons/CustomButton";
import DiscountBox from "./smallComponets/page";

const styles = {
  checkoutText: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    marginBottom: "44px",
  },
  contactDetails: {
    marginTop: { xs: "80px", sm: "85px", md: "85px", xl: "85px" },
    width: { xs: "84%", sm: "87%", md: "82%", lg: "70%", xl: "65%" },
    marginLeft: { xs: "4%", sm: "4%", md: "8%", lg: "20%", xl: "25%" },
  },
  createAccountContainer: {
    display: { xs: "block", md: "flex" },
    width: { xs: "100%" },
  },
  createAccount: {
    display: { xs: "flex" },
    marginTop: { xs: "2px", md: "34px" },
    margin: "auto",
    marginLeft: { md: "47%", md: "40%", lg: "6%", xl: "21%" },
  },
  haveAccountText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: { xs: "20px", md: "16px" },
    lineHeight: { xs: "26.63px", md: "19.36px" },
    color: "#000000",
    alignItem: { md: "Right" },
    marginLeft: { xs: "0px", md: "50px", lg: "19px" },
  },
  createAccountText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: { xs: "20px", md: "16px" },
    lineHeight: { xs: "26.63px", md: "19.36px" },
    color: "#1456FF",
    alignItem: { md: "Right" },
    marginLeft: "5px",
  },
  firstAndLastName: {
    display: "flex",
    marginTop: { xs: "16px", sm: "16px", md: "16px", xl: "16px" },
    marginLeft: { xs: "3%", sm: "4%", md: "8%", lg: "20%", xl: "25%" },
    gap: { xs: "10%", sm: "8%", md: "5%", lg: "8%", xl: "8%" },
  },
  Name: {
    width: { xs: "39%", sm: "41.5%", md: "42%", lg: "39.8%", xl: "39%" },
  },
  address: {
    marginTop: { xs: "16px", sm: "16px", md: "16px", xl: "16px" },
    width: { xs: "84%", sm: "87%", md: "82%", lg: "70%", xl: "65%" },
    marginLeft: { xs: "4%", sm: "4%", md: "8%", lg: "20%", xl: "25%" },
  },
  saveInfo: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "42px",
    color: "#8A8A8A",
    marginLeft: { xs: "2%", sm: "3%", md: "6.8%", lg: "20%", xl: "25%" },
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    marginLeft: { lg: "15.5%", xl: "18%" },
  },
  dicountContainer: {
    width: { xs: "93%", md: "85%", lg: "50%" },
    backgroundColor: { xs: "#FFFFFF", md: "#F5F5F5" },
    height: { xs: "300px", lg: "147vh" },
    marginLeft: { xs: "3%", md: "8%", lg: "0%" },
    border: { xs: "1px solid #EEEEEE" },
    borderRadius: "5px",
    border: "1px solid #FFFFFF",
    borderBottom: "1px solid #FFFFFF",
    boxShadow: "4px 4px 4px 4px rgba(36, 36, 36, 0.1)",
  },
  shoesContainer: {
    marginLeft: { xs: "2%", sm: "5%", md: "5%", lg: "6%", xl: "7%" },
    marginTop: { xs: "37px", lg: "50px" },
    display: { xs: "flex" },
  },
  shoeRightContent: {
    display: { xs: "column", md: "flex" },
    width: { xs: "54%", md: "70%" },
  },
  discountCodeBox: {
    width: { xs: "78%", sm: "95%", md: "90%", lg: "90%", xl: "80%" },
    marginLeft: { xs: "0%", sm: "5%", md: "5%", lg: "6%", xl: "7%" },
    display: { xs: "none", lg: "block" },
  },

  brandDescriptionContainer: {
    marginLeft: { xs: "8%", sm: "5%", lg: "3%" },
    marginTop: { xs: "11%", sm: "8%", lg: "6%" },
  },
  brandDescription: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "26.63px",
    color: "#000000",
    flexWrap: "wrap",
  },
  colorStyles: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.36px",
    color: "#484848",
  },
  priceStyles: {
    marginLeft: { xs: "8%", sm: "5%", md: "5%", lg: "6%", xl: "8%" },
    marginTop: "6%",
    fontFamily: "Inter",
    fontWeight: { xs: "600", lg: "400" },
    fontSize: { xs: "24px", lg: "16px" },
    lineHeight: "19.36px",
    marginTop: { xs: "11%", md: "18%" },
  },
  priceChildren: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.36px",
    marginBottom: "17px",
  },
  imageStyles: {
    width: { xs: "168px", lg: "145px" },
    height: { xs: "225px", lg: "137px" },
  },
};

const PaymentInfomation = () => {
  return (
    <Box>
      <Box sx={styles.contactDetails} marginTop="60px">
        <CustomInput label={"Payment"} placeholder={"Credit Card"} />
      </Box>
      <Box sx={styles.address} marginTop="60px">
        <CustomInput placeholder={"Card Number"} />
      </Box>
      <Box sx={styles.firstAndLastName}>
        <Box sx={styles.Name}>
          <CustomInput placeholder={"Expiration Date "} />
        </Box>
        <Box sx={styles.Name}>
          <CustomInput placeholder={"Security Code"} />
        </Box>
      </Box>
      <Box sx={styles.address} marginTop="60px">
        <CustomInput placeholder={"Card Holder Name"} />
      </Box>
      <Typography sx={styles.saveInfo}>
        {" "}
        <Checkbox defaultUnchecked />
        Save This Info for future
      </Typography>
      <Box sx={styles.buttonStyle}>
        <PrimaryButton
          style={{ width: { xs: "175px", lg: "450px", xl: "535px" } }}
          content="Pay Now"
        />
      </Box>
    </Box>
  );
};
export const ContactDetails = () => {
  return (
    <Box sx={styles.contactDetails}>
      <Box sx={styles.createAccountContainer}>
        <Box
          sx={{
            fontFamily: "Volkhov",
            fontWeight: "400",
            fontSize: "46px",
            lineHeight: "59.34px",
            color: "#484848",
          }}
        >
          Contact
        </Box>
        <Box sx={styles.createAccount}>
          <Typography sx={styles.haveAccountText}>Have an Account?</Typography>
          <Typography sx={styles.createAccountText}>Create Account</Typography>
        </Box>
      </Box>
      <CustomInput placeholder={"Email Address"} />
    </Box>
  );
};

export const DeliveryDetails = () => {
  return (
    <Box>
      <Box sx={styles.contactDetails} marginTop="60px">
        <CustomInput label={"Delivery"} placeholder={"State"} />
      </Box>
      <Box sx={styles.firstAndLastName}>
        <Box sx={styles.Name}>
          <CustomInput placeholder={"First Name"} />
        </Box>
        <Box sx={styles.Name}>
          <CustomInput placeholder={"Last Name"} />
        </Box>
      </Box>
      <Box sx={styles.address} marginTop="60px">
        <CustomInput placeholder={"Address"} />
      </Box>
      <Box sx={styles.firstAndLastName}>
        <Box sx={styles.Name}>
          <CustomInput placeholder={"City"} />
        </Box>
        <Box sx={styles.Name}>
          <CustomInput placeholder={"Postal Code"} />
        </Box>
      </Box>
      <Typography sx={styles.saveInfo}>
        {" "}
        <Checkbox defaultUnchecked />
        Save This Info for future
      </Typography>
    </Box>
  );
};

export const ShoesBox = ({ Price }) => {
  return (
    <Box sx={styles.dicountContainer}>
      <Box sx={styles.shoesContainer}>
        <Box sx={styles.imageStyles}>
          <Image
            src={shoesImage}
            alt="shoes image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box sx={styles.shoeRightContent}>
          <Box sx={styles.brandDescriptionContainer}>
            <Typography sx={styles.brandDescription}>
              Denim Shoe- Limited Edition
            </Typography>
            <Typography sx={styles.colorStyles}>Color: Blue</Typography>
          </Box>
          <Typography sx={styles.priceStyles}>Rs. {Price}</Typography>
        </Box>
      </Box>
      <Box sx={styles.discountCodeBox}>
        <DiscountBox />
        <Box sx={{ display: { xs: "none", lg: "flex" }, marginTop: "21px" }}>
          <Box>
            <Typography sx={styles.priceChildren}>Subtotal</Typography>
            <Typography sx={styles.priceChildren}>Shipping</Typography>
            <Typography sx={styles.priceChildren}>Total</Typography>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Typography sx={styles.priceChildren}>Rs. 1250</Typography>
            <Typography sx={styles.priceChildren}>Rs. 250</Typography>
            <Typography sx={styles.priceChildren}>Rs. 1450</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const DiscountApply = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  styles,
  onFocus,
  onBlur,
}) => {
  return (
    <Box
      sx={{
        marginTop: { xs: "40px", sm: "40px", lg: "85px" },
        width: { xs: "84%", sm: "87%", md: "82%", lg: "70%", xl: "65%" },
        marginLeft: { xs: "4%", sm: "4%", md: "8%", lg: "20%", xl: "25%" },
        display: { lg: "none" },
      }}
    >
      <Box
        sx={{
          fontFamily: "Volkhov",
          fontWeight: "400",
          fontSize: "46px",
          lineHeight: "59.34px",
          color: "#484848",
        }}
      >
        {label}
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

export default PaymentInfomation;
