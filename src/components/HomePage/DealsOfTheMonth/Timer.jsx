import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  intervalToDuration,
  isBefore,
  add,
  endOfDay,
  differenceInMilliseconds,
} from "date-fns";

const style = {
  timeContainer: {
    gap: "1rem",
    display: "flex",
    flexDirection: "row",
  },
  subTimeContainer: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  timeValue: {
    height: "76px",
    width: "76px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 14px 1px #00000029",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontWeight: "500",
    fontSize: "2rem",
    fontFamily: "Digital Number",
    color: "#000000",
  },
  label: {
    fontWeight: "500",
    fontSize: "1.25rem",
    color: "#000000",
    textAlign: "center",
    fontFamily: "Inter",
    mt: "1rem",
  },
};

const Timer = () => {
  const now = new Date();
  const endOfToday = endOfDay(now);
  const remainingHours = endOfToday.getHours() - now.getHours();

  const [countdown, setCountdown] = useState({});
  const [endDate, setEndDate] = useState(() => {
    return new Date(Date.now() + differenceInMilliseconds(endOfToday, now));
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const now = new Date();
      const endOfToday = endOfDay(now);
      const remainingHours = endOfToday.getHours() - now.getHours();
      const nextDayAndExtraTime = add(now, {
        hours: remainingHours + 40,
        seconds: 1,
      });

      const endDate = new Date(
        Date.now() + differenceInMilliseconds(endOfToday, now)
      );

      const interval = setInterval(() => {
        const now = new Date();
        const duration = intervalToDuration({ start: now, end: endDate });

        if (isBefore(endDate, now)) {
          clearInterval(interval);
        } else {
          const days = duration.days || 0;
          const hours = duration.hours || 0;
          const minutes = duration.minutes || 0;
          const seconds = duration.seconds || 0;

          setCountdown({ days, hours, minutes, seconds });
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Box sx={style.timeContainer}>
      <Box sx={style.subTimeContainer}>
        <Box sx={style.timeValue}>
          <Typography sx={style.value}>{countdown.days}</Typography>
        </Box>
        <Typography sx={style.label}>Days</Typography>
      </Box>
      <Box sx={style.subTimeContainer}>
        <Box sx={style.timeValue}>
          <Typography sx={style.value}>{countdown.hours}</Typography>
        </Box>
        <Typography sx={style.label}>Hr</Typography>
      </Box>
      <Box sx={style.subTimeContainer}>
        <Box sx={style.timeValue}>
          <Typography sx={style.value}>{countdown.minutes}</Typography>
        </Box>
        <Typography sx={style.label}>Mins</Typography>
      </Box>
      <Box sx={style.subTimeContainer}>
        <Box sx={style.timeValue}>
          <Typography sx={style.value}>{countdown.seconds}</Typography>
        </Box>
        <Typography sx={style.label}>Sec</Typography>
      </Box>
    </Box>
  );
};

export default Timer;
