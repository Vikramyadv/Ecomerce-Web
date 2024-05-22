import { createTheme } from "@mui/material";

export const Colors = {
  primaryMain: "#3CB0AD",
  primaryLight: "#FFFFFF",
  primaryDark: "#242424",
  primarytext: "#323842",
  success: "#07A803",
  error: "#EC5347",
};

export const BaseTheme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          listStyle: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: Colors.primaryMain,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
    },
    error: {
      main: Colors.error,
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (laptops)
      xl: 1920, // Extra large devices (desktops)
    },
  },
  typography: {
    fontFamily: "Sen, sans-serif,Avenir",
  },

  textFields: {
    labelStyle: {},
    inputStyle: {},
    fixFilledInput: {
      "&:hover": {
        backgroundColor: "#f0f0f0 !important",
      },
      // "&:hover:not(.Mui-disabled, .Mui-error):before": {
      //   borderBottom: "none",
      // },
      "&:before": {
        borderBottom: "none !important",
      },
      "&:after": {
        borderBottom: "none !important",
      },
    },
    noSpinButton: {
      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
        {
          display: "none",
        },
      "& input[type=number]": {
        MozAppearance: "textfield",
      },
    },
    dottedBottomBorder: {
      "& .MuiInput-root.MuiInput-underline:before": {
        borderBottom: "1px dotted #898989",
      },
      "& .MuiInput-root.MuiInput-underline:after": {
        borderBottom: "1px dotted #898989",
      },
      "& .MuiInput-root.MuiInput-underline:hover:before": {
        borderBottom: "1px solid #898989",
      },
      "& .MuiInput-root.MuiInput-underline:hover:after": {
        borderBottom: "1px solid #898989",
      },
    },
    noBorder: {
      "& .MuiInput-root.MuiInput-underline:before": {
        border: "none",
      },
      "& .MuiInput-root.MuiInput-underline:after": {
        border: "none",
      },
      "& .MuiInput-root.MuiInput-underline:hover:before": {
        border: "none",
      },
      "& .MuiInput-root.MuiInput-underline:hover:after": {
        border: "none",
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: "#F1F1F1",
        },
      },
    },
  },
});
