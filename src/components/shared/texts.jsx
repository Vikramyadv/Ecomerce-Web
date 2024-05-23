import { Typography } from "@mui/material";

export const PageHeading = ({
  children,
  styles,
  size = "42px",
  color = "#000000",
  weight = 600,
  lineHeight = "32px",
}) => {
  return (
    <Typography
      sx={{
        fontSize: size,
        color: color,
        fontWeight: weight,
        lineHeight: lineHeight,
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export const ShadowHeading = ({ children, styles }) => {
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "#8B96A5",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "-0.2px",
        fontFamily: "Inter",
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export const PrimaryText = ({ children, style }) => {
  return (
    <Typography
      sx={{
        fontSize: "42px",
        fontWeight: 400,
        lineHeight: "32px",
        letterSpacing: "-0.2px",
        fontFamily: "Volkhov",
        color: "#000000",
        ...style,
      }}
    >
      {children}
    </Typography>
  );
};
