import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Book from "./Book";
import BookingConfirmed from "./BookingConfirmed";
import { initGoogleTag } from "./googleAds";
import "./index.css";

initGoogleTag();

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book" element={<Book />} />
        <Route path="/booking-confirmed" element={<BookingConfirmed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
