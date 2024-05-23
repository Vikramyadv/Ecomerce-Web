import React from "react";
import { Box, Typography } from "@mui/material";

const CustumInput = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  styles,
  onFocus,
  onBlur,
  account1,
  account2,
}) => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box sx={{ display: "flex" }}>
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
        <Box sx={{ display: "flex" }}>
          <Typography>{account1}</Typography>
          <Typography>{account2}</Typography>
        </Box>
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

export default CustumInput;
