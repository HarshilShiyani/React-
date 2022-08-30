import React from "react";
import ReactDom from "react-dom/client";
import Product from "./Product";
import Contact from "./Contact";
import About from "./About";
import Student from "./Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Layout from "./Layout";
import PageNotFound from "./NotFoundPage";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="Student" element={<Student />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
