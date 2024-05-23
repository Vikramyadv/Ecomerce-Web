import React from "react";
import { Box, Typography } from "@mui/material";
import { ExploreFooterData } from "./helper";
import Image from "next/image";

const style = {
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "7rem",
    paddingY: "5rem",
    flexWrap: "wrap",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  subInnerContainer: {
    gap: "10px",
  },
  title: { fontSize: "20px", fontWeight: "500" },
  description: { fontSize: "16px", fontWeight: "400" },
};

const ExploreSectionFooter = () => {
  return (
    <Box sx={style.rootContainer}>
      {ExploreFooterData.map((data) => {
        return (
          <Box key={data.id} sx={style.innerContainer}>
            {data.icon}
            <Box sx={style.subInnerContainer}>
              <Typography sx={style.title}>{data.label}</Typography>
              <Typography sx={style.description}>{data.description}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ExploreSectionFooter;
