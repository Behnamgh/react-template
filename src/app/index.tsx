import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import FLUX from "../flux";
import HomePage from 'src/page/home';
import LoginPage from 'src/page/login';

export default function App() {
    return (
        <BrowserRouter>
            <FLUX>
                <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                </SnackbarProvider>
            </FLUX>
        </BrowserRouter >
    );
}