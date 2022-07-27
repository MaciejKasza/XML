import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

//Others
import { StoreProvider } from "../../store/StoreProvider";

//Components
import HomePage from "../../pages/homePage/HomePage";

// Style
const GlobalStyle = createGlobalStyle`
    
  `;

const theme = {
  white: "#ffffff",
  green: "#D7FC81",
  primaryColor: "#012638",
  backgroundLight: "#D3D8DB",
  backgroundDark: "#263B4B",
  grey: "#575757",
};

const App = (props) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
