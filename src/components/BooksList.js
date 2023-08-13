import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@material-ui/utils";
import WithAuth from "../layout/WithAuth.js";
const BooksList = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>Welcome to BooksList </div>
      <div>
      <Button variant="contained" onClick={handleOnClick} color="info">Click Me</Button>
      </div>
    </>
  );
};

export default WithAuth(BooksList);