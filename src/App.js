import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import BooksList from "./components/BooksList";
import PageNotFound from "./components/PageNotFound";
import Form from "./components/Form";
import { ThemeProvider, createTheme } from '@mui/material';
import { GlobalStyles } from "./styles/GlobalStyles";
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
      <div className="navbar" style={GlobalStyles.navbar}>
        <NavLink to="/" > Home </NavLink>
        <NavLink to="/books"> Books </NavLink>
        <NavLink to="/form">Form</NavLink>
      </div>
        <Routes>
           <Route path='/' element={<HomePage uname="Harsh"/>}></Route>
            <Route path='/books' element={<BooksList />}></Route>
            <Route path='/form' element={<Form/>}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

////////////////////////////////////
// import './App.css';
// import BookList from './components/BookList';
// import Homepage from './components/Homepage';
// import PageNotFound from './components/PageNotFound';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// import { globalStyles } from './styles/globalStyles';
// import Form from './components/Form';
// import { ThemeProvider, createTheme } from '@mui/material';

// function App() {
//   const theme = createTheme({
//     components:{
//       MuiButton:{
//         styleOverrides:{
//           root:{
//             backgroundColor:"green",
//             '&:hover': {
//               backgroundColor: 'darkgreen',
//               boxShadow: 'none',
//             }
//           }
//         }
//       }
//     }
//   });
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//           <div
//             // className='navbar'
//             // style={{
//             //   padding:12,
//             //   display:"flex",
//             //   justifyContent:"space-between",
//             //   width:150
//             // }}
//             style={{ ...globalStyles.navbar }}
//           >
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/books">Books</NavLink>
//             <NavLink to="/form">Form</NavLink>
//           </div>
//           <Routes>
//             <Route path='/' element={<Homepage uname="Pranav" />}></Route>
//             <Route path='/books' element={<BookList />}></Route>
//             <Route path='/form' element={<Form/>}></Route>
//             <Route path='*' element={<PageNotFound />}></Route>
//           </Routes>

//         </BrowserRouter>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;
