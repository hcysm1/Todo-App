import React from "react";
import "../css/main.css";
import Routes from "../routes/Router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const TITLE = "Todo App";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#a7ffeb",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a7ffeb",
      main: "#004d40",
      dark: "#00695c",
      contrastText: "#e0f2f1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Todo App
        </motion.h1>

        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
