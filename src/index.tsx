import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CssGlobalStyle } from "./Utils/cssGlobalStyle";
import { AuthProvider } from "./Hooks/useAuth";
import { ScrollToTop } from "./Components/Common/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <CssGlobalStyle />
                <ScrollToTop />
                <Application />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
