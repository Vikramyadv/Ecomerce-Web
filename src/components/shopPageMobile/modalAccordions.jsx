"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Slider,
  Stack,
  Rating,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import filterIcon from "@/../../public/Assets/shopPage/filterIcon.svg";
import Image from "next/image";
import CustomButton, { BottomLineButton } from "../Buttons/CustomButton";
import {
  availabilityOptions,
  categories,
  features,
  ratingsData,
} from "../leftAccordions/helperData";

const ModalAccordions = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    dialogContent: {
      overflowY: "auto",
    },
    closeButton: {
      position: "absolute",
      right: 8,
      top: 8,
      color: (theme) => theme.palette.grey[500],
    },
    rootContainer: { display: { lg: "none" } },
    accordionContainer: {
      width: "100%",
      margin: "auto",
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
    buttonContainer: {
      marginTop: "29px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <Box sx={styles.rootContainer}>
      <Button sx={styles.filterIconStyles} onClick={handleClickOpen}>
        <Image src={filterIcon} alt="Filter Icon" />
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ marginBottom: "5%" }}>
          <IconButton onClick={handleClose} style={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent Boxiders style={styles.dialogContent}>
          <Box sx={styles.accordionContainer}>
            {categories.map((category) => (
              <Accordion key={category.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${category.id}-content`}
                  id={`panel${category.id}-header`}
                >
                  <Typography style={styles.heading}>
                    {category.name}
                  </Typography>
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
              {availabilityOptions[0].subcategories.map(
                (subcategory, index) => (
                  <AccordionDetails key={index}>
                    <Typography style={styles.headingChildren}>
                      <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                      />
                      {subcategory}
                    </Typography>
                  </AccordionDetails>
                )
              )}
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
          <Box sx={styles.buttonContainer}>
            <CustomButton content={"Apply"} />
            <BottomLineButton content={"Reset"} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ModalAccordions;
