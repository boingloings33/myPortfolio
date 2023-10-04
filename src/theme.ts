import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: "#FCFAF9",
      main: "#48E5C2",
      dark: "#333333",
    },
    secondary: {
      light: "#fcdb35",
      main: "#F3D3BD",
      dark: "#5eeaff",
    },
    info: {
      light: "#18191a",
      main: "#080808",
    },
  },
  typography: {
    fontFamily: "Source Code Pro",
    h1: {
      fontWeight: 700,
      fontSize: 40,
      color: "#080808",
    },
    h2: {},
    h3: {
      fontSize: 28,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.93,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.93,
    },
    body2: {
      fontSize: 18,
      lineHeight: 2.13,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.light,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
          fontFamily: "Open Sans, sans-serif",
          textTransform: "none",
          fontSize: 20,
          fontWeight: 500,
          boxShadow: "none",
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:focused": { backgroundColor: "red" },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "rgba(255, 255, 255, 0.7)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "white",
          },
          borderRadius: 14,
          color: "white",
          background: "#73C0A2",
          fieldset: {
            borderColor: "white",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: { fontFamily: "Poppins, sans-serif" },
      },
    },
  },
};

export default createTheme(theme);
