import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createTheme,
  fontWeight,
  ThemeProvider,
  typography,
} from "@mui/system";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: purple,
  },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLigth: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes></Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
