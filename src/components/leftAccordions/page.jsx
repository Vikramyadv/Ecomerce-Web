"use server";
import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Slider from "@mui/material/Slider";
import {
  availabilityOptions,
  categories,
  features,
  ratingsData,
} from "./helperData";

const styles = {
  accordionContainer: {
    width: { xs: "19%", md: "19%", xl: "19%" },
    marginTop: "9%",
    marginLeft: { xs: "1%", md: "4%", lg: "3%", xl: "3%" },
    display: { xs: "none", lg: "block" },
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19.36px",
    color: "#1C1C1C",
  },
  headingChildren: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.36px",
    color: "#505050",
  },
  seeAllText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.36px",
    color: "#F38332",
  },
};
const LeftAccordions = async () => {
  <Accordion slotProps={{ transition: { unmountOnExit: true } }} />;
  return (
    <Box sx={styles.accordionContainer}>
      {categories.map((category) => (
        <Accordion key={category.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${category.id}-content`}
            id={`panel${category.id}-header`}
          >
            <Typography style={styles.heading}>{category.name}</Typography>
          </AccordionSummary>
          {category.subcategories.map((subcategory, index) => (
            <AccordionDetails key={index}>
              <Typography style={styles.headingChildren}>
                {subcategory}
              </Typography>
            </AccordionDetails>
          ))}
          <AccordionDetails>
            <Typography style={styles.seeAllText}>See All</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {features.map((feature) => (
        <Accordion key={feature.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${feature.id}-content`}
            id={`panel${feature.id}-header`}
          >
            <Typography style={styles.heading}>{feature.name}</Typography>
          </AccordionSummary>
          {feature.subFeatures.map((subfeatures, index) => (
            <AccordionDetails key={index}>
              <Typography style={styles.headingChildren}>
                <Checkbox defaultUnchecked />
                {subfeatures}
              </Typography>
            </AccordionDetails>
          ))}
          <AccordionDetails>
            <Typography style={styles.seeAllText}>See All</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={styles.heading}>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider />
        </AccordionDetails>
        <AccordionDetails sx={{ gap: "20px" }}>
          <label htmlFor="minInput">Min:</label>
          <label htmlFor="minInput">Max:</label>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={styles.heading}>
            {availabilityOptions[0].label}
          </Typography>
        </AccordionSummary>
        {availabilityOptions[0].subcategories.map((subcategory, index) => (
          <AccordionDetails key={index}>
            <Typography style={styles.headingChildren}>
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
              />
              {subcategory}
            </Typography>
          </AccordionDetails>
        ))}
        <AccordionDetails>
          <Typography style={styles.seeAllText}>See All</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={styles.heading}>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} style={styles.ratingContainer}>
            {ratingsData.map((rating, index) => (
              <Rating
                key={index}
                name={`half-rating-${index}`}
                defaultValue={1}
                precision={rating.precision}
              />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default LeftAccordions;
