"use client";
import React, { useState } from "react";
import { Box, Typography, Rating, ButtonBase } from "@mui/material";
import profileImage from "@/../public/Assets/HomePage/profileImage.jpg";
import Image from "next/image";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { accountItems, navItems } from "./helper";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Notification from "../Notification/Notification";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import myorder from "@/../public/Assets/user/profile/myorders.svg";
import wallet from "@/../public/Assets/user/profile/wallet.svg";
import wishlist from "@/../public/Assets/user/profile/wishlist.svg";

const style = {
  mainRootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  rootContainer: {
    width: { xs: "100%", sm: "100%", md: "40%", lg: "40%", xl: "40%" },
    height: "fit-content",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: "center",
    maxWidth: { xs: "100%", sm: "100%", md: "380px" },
    boxShadow: "0px 0px 8px 0px #22222224",
    color: "#F8F8F8",
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: { xs: "200px", sm: "200px", md: "150px" },
    background: "#FF9017",
    borderRadius: {
      xs: "0 0 10px 10px",
      sm: "0 0 10px 10px",
      md: "10px 10px 0px 0px",
      lg: "10px 10px 0px 0px",
    },
  },
  detailSection: {
    height: "fit-content",
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
      xl: "flex",
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    position: "relative",
    bottom: "35px",
    width: "100%",
  },
  imageSection: {
    height: "70px",
    width: "70px",
    borderRadius: "100%",
  },
  userName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1rem",
    textAlign: "center",
    color: "#000000",
    lineHeight: "18.5px",
  },
  mail: {
    fontSize: "0.9rem",
    color: "#4A5568",
    lineHeight: "18px",
    textAlign: "center",
  },
  divider: {
    width: "90%",
    textAlign: "center",
    border: "1px solid #DDDDDD",
  },
  accountSection: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    width: "75%",
    maxWidth: "380px",
    my: "2rem",
  },
  title1: {
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "26px",
    fontFamily: "Volkhov",
    // textAlign: "center",
    color: "#000000",
  },
  accountItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title2: {
    fontSize: "1.2rem",
    fontWeight: "400",
    lineHeight: "26px",
    color: "#4D4D4D",
  },
  rightContainer: {
    width: { xs: "0%", sm: "0%", md: "58%", lg: "58%", xl: "60%" },
    height: "auto",
    maxHeight: "900px",
    maxWidth: "1080px",
    mr: "1rem",
    display: { xs: "none", sm: "none", md: "flex" },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  },
  header: {
    fontFamily: "Volkhov",
    fontSize: "3rem",
    fontWeight: "400",
    lineHeight: "32px",
    color: "#000000",
  },
  markAllread: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100px",
    color: "#FF9017",
    gap: "0.5rem",
    position: "relative",
    top: "0.5rem",
    left: "50%",
  },
  markAllreadText: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "24px",
    fontFamily: "Asap",
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  mobileDetailSection: {
    height: "fit-content",
    display: {
      xs: "flex",
      sm: "flex",
      md: "none",
      lg: "none",
      xl: "none",
    },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    py: "1rem",
    gap: "10px",
    position: "relative",
    bottom: "35px",
    width: "90%",
    maxWidth: "380px",

    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 28px 0px #0000000D",
  },
  title3: {
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "12.61px",
    fontFamily: "Volkhov",
    color: "#000000",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
};
const MainPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  return (
    <Box sx={style.mainRootContainer}>
      <Box sx={style.rootContainer}>
        <Box sx={style.firstContainer}>
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
              flexDirection: "row",
              justifyContent: "space-evenly",
              // alignItems: "center",
              width: "100%",
              maxWidth: "380px",
            }}
          >
            <Box sx={style.imageSection}>
              <Image
                src={profileImage}
                alt="profileimage"
                style={style.imageSection}
              />
            </Box>
            <Box sx={style.textSection}>
              <Typography varient="h3" sx={{ ...style.title, color: "#fff" }}>
                User Name
              </Typography>
              <Typography varient="h4" sx={{ ...style.mail, color: "#fff" }}>
                usermailId@gmail.com
              </Typography>
            </Box>
            <ModeEditOutlineRoundedIcon style={{ color: "#fff" }} />
          </Box>
        </Box>
        <Box sx={style.detailSection}>
          <Box sx={style.imageSection}>
            <Image
              src={profileImage}
              alt="profileimage"
              style={style.imageSection}
            />
          </Box>
          <Box sx={style.userName}>
            <Typography varient="h3" sx={style.title}>
              User Name
            </Typography>
            <ModeEditOutlineRoundedIcon
              style={{ color: "#FF9017", position: "relative", left: "20%" }}
            />
          </Box>
          <Typography varient="h4" sx={style.mail}>
            usermailId@gmail.com
          </Typography>
          <Box sx={style.divider} />
        </Box>
        <Box sx={style.mobileDetailSection}>
          <Box sx={style.subContainer}>
            <Image src={myorder} alt="myorder" />
            <Typography varient="h1" sx={style.title3}>
              My Orders
            </Typography>
          </Box>
          <Box sx={style.subContainer}>
            <Image src={wishlist} alt="wishlist" />
            <Typography varient="h1" sx={style.title3}>
              My Wishlist
            </Typography>
          </Box>
          <Box sx={style.subContainer}>
            <Image src={wallet} alt="wallet" />
            <Typography varient="h1" sx={style.title3}>
              My Wallet
            </Typography>
          </Box>
        </Box>
        <Box sx={style.accountSection}>
          <Typography varient="h1" sx={style.title1}>
            My Account
          </Typography>
          {accountItems.map((item) => (
            <Box
              key={item.id}
              sx={style.accountItem}
              onClick={() => {
                setSelectedComponent(item.id - 1);
              }}
            >
              <Typography varient="h2" sx={style.title2}>
                {item.title}
              </Typography>
              <KeyboardArrowRightRoundedIcon style={{ color: "#4D4D4D" }} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            ...style.accountSection,
            paddingBottom: "4rem",
          }}
        >
          <Typography varient="h1" sx={style.title1}>
            Other
          </Typography>
          {navItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                ...style.accountItem,
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <Image src={item.img} alt="image" />
              <Typography varient="h2" sx={style.title2}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={style.rightContainer}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography varient="h1" sx={style.header}>
            {accountItems[selectedComponent]?.title}
          </Typography>
          <Box sx={style.markAllread}>
            <DoneAllIcon style={{ color: "#FF9017" }} />
            <Typography sx={style.markAllreadText}>Mark as read</Typography>
          </Box>
        </Box>
        {selectedComponent === 1 ? <Notification /> : null}
      </Box>
    </Box>
  );
};

export default MainPage;
