import React from "react";
import "./styles/index.css";
import App from "./pages/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Products from "./pages/Products";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
    palette: {
        primary: {
            main: "#012553",
        },
    },
});

root.render(
    <React.StrictMode style={{ overflow: "hidden" }}>
        <Provider import store={store}>
            <ThemeProvider theme={theme}>
                <Cart />
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
