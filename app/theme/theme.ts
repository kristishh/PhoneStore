import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});
