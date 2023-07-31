import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@material-ui/utils";

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

export default BooksList;