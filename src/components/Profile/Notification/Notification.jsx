import React from "react";
import { Box, Typography } from "@mui/material";
import { notificationData } from "./helper";
import { max } from "date-fns";

const style = {
  rootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    border: "1px solid #E4E7E9",
    borderRadius: "4px",
    height: "836px",
    maxWidth: "1080px",
  },
  subRootContainer: {
    width: "95%",
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    height: "auto",
    py: "1rem",
    gap: "1rem",
    paddingTop: "8rem",
    overflowY: "scroll",
    scrollbarWidth: "none",
  },
  notificationBox: {
    width: "100%",
    maxWidth: "1000px",
    height: "auto",
    // borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  unread: {
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    background: "#FF9017",
  },
  arrivedTime: {
    fontSize: "12px",
    fontFamily: "Asap",
    fontWeight: "400",
    lineHeight: "13.75px",
    color: "#6C6C6C",
  },
  title: {
    fontFamily: "Volkhov",
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#000000",
  },
  description: {
    fontFamily: "Asap",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#767676",
  },
  textContainer: {
    width: "calc(100% - 3rem - 10px)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    margin: "0 1rem 1rem calc(2rem + 10px)",
  },
};

const Notification = () => {
  return (
    <Box sx={style.rootContainer}>
      <Box
        sx={{
          ...style.subRootContainer,
        }}
      >
        {notificationData.map((notification) => (
          <Box
            sx={{
              ...style.notificationBox,
              background: notification.read && "#FFF0E4",
              // padding: "1rem",
            }}
            key={notification.id}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                margin: "1rem 1rem 0 1rem",
                width: "calc(100% - 2rem)",
                // justifyContent: "center",
                alignContent: "center",
              }}
            >
              {notification.read ? (
                <Box sx={{ ...style.unread }} />
              ) : (
                <Box sx={{ ...style.unread, height: "0px" }} />
              )}
              <Typography variant="h6" sx={style.arrivedTime}>
                {notification.arrivedAt}
              </Typography>
            </Box>
            <Box sx={style.textContainer}>
              <Typography varient="h1" sx={style.title}>
                {notification.title}
              </Typography>
              <Typography varient="p" sx={style.description}>
                {notification.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Notification;
