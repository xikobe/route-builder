import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

ReactDOM.render(
    <ThemeProvider>
        <CSSReset />
        <App />
    </ThemeProvider>,
document.getElementById('root'));
