import React, { useState } from "react";
import "./App.css";

import { store } from "./store/store";
import { Provider as ReduxProvider } from "react-redux";
import { useAppSelector } from "./store/hooks";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import Quotes from "./pages/Quotes";
import Coffee from "./pages/Coffee";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Global/Theme";
import CssBaseline from "@mui/material/CssBaseline";

// !importing pages

function App() {
  // const [mode, setmode] = useState("lightTheme");

  const currentMode = useAppSelector((state) => state.themeMode.mode);
  // console.log(currentMode);
  return (
    <div>
      <ThemeProvider theme={currentMode === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <div>
          <Routes>
            <Route path="/">
              <Route element={<Home />} index />
              <Route path=":id" element={<>Single Post</>} />
            </Route>
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
