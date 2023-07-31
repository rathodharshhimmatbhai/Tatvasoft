import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import BooksList from "./components/BooksList";
import PageNotFound from "./components/PageNotFound";
import Image from "./logo.svg"
import { GlobalStyles } from "./styles/GlobalStyles";
export default function App(){
  return (
    <div className="App">
      <img src={Image} style={GlobalStyles.pic}  alt="This is Logo"/>
      <BrowserRouter>
      <div className="navbar" style={GlobalStyles.navbar}>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/books"> Books </NavLink>
      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
