import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page
import App from "./App";
import Register from "./page/Register";
import Home from "./page/Home";
import Details from "./page/Details";
import AddPost from "./page/AddPost";
import Notification from "./page/Notification";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route path="/post" element={<AddPost />}></Route>
      <Route path="/notification" element={<Notification />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
