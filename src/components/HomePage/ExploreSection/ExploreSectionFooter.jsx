import React from "react";
import { Grid, Typography } from "@mui/material";
import { ExploreFooterData } from "./helper";
import Image from "next/image";

const style = {
  rootContainer: {
    paddingY: "5rem",
    maxWidth: "1272px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "500",
    textAlign: "center",
  },
  description: {
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    display: { xs: "none", sm: "none", md: "flex" },
  },
  gridItem: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    gap: "10px",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  contentContainer: {
    textAlign: "center",
  },
};

const ExploreSectionFooter = () => {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={style.rootContainer}
    >
      {ExploreFooterData.map((data) => (
        <Grid key={data.id} item xs={3} sm={3} md={3} sx={style.gridItem}>
          <div style={style.contentContainer}>
            {" "}
            {/* Center content */}
            {data.icon}
            <Typography sx={style.title}>{data.label}</Typography>
            <Typography sx={style.description}>{data.description}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExploreSectionFooter;
