import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import BooksList from "./components/BooksList";
import PageNotFound from "./components/PageNotFound";
import Form1 from "./components/Form";
import { ThemeProvider, createTheme } from '@mui/material';
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  const theme = createTheme({
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            backgroundColor:"green",
            '&:hover': {
              backgroundColor: 'darkgreen',
              boxShadow: 'none',
            }
          }
        }
      }
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <div className="navbar" style={GlobalStyles.navbar}>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/books"> Books </NavLink>
        <NavLink to="/form">Form</NavLink>
      </div>
        <Routes>
           <Route path='/' element={<HomePage uname="Harsh"/>}></Route>
            <Route path='/books' element={<BooksList />}></Route>
            <Route path='/form' element={<Form1/>}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}