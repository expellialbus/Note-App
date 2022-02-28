import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";

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
        <Layout>
          <Routes>
            <Route index element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
