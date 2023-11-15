import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5238ff",
      dark: "#08003e",
      light: "#1c00da",
    },
    secondary: {
      main: "#e8477d",
      dark: "#9b2f53",
      light: "#ff4e71",
    },
    background: {
      default: "#c8cdd3",
    },
  },
  shape: {
    borderRadius: 5,
  },
};

export const theme = createTheme(themeOptions);
