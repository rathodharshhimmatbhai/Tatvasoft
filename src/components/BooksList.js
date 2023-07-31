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
      <button onClick={handleOnClick}>Click Me!</button>
    </>
  );
};

export default BooksList;