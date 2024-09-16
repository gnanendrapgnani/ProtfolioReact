import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import MainContainer from "./components/MainContainer";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MainContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
