import React from "react";

import ButtonBase from "./components/Buttons/ButtonBase";
import { ThemeProvider } from "@material-ui/styles";

import "./App.css";
import theme from "./theme/theme";

function App() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <ButtonBase variant="contained" color="primary">
                        Hello FCode Storybook Team. <br /> Run yarn storybook
                    </ButtonBase>
                </header>
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
