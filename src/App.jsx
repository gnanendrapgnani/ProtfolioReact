import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import MainContainer from "./components/MainContainer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <Loader />
        ) : (
          <>
            <motion.div
              style={{
                scaleX,
                zIndex: "3",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: " 10px",
                background: "#e19f27",
                transformOrigin: " 0%",
              }}
            />
            <Header />
            <MainContainer />
          </>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
