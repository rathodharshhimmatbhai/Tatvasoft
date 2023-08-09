import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = (props) => {
    const navigate = useNavigate()
    const btnClick =() =>{
        navigate("/books")
    }
    return (
        <React.Fragment>
            <div>Hello {props.uname}</div>
            <Button variant="contained" 
            // color='success' 
            onClick={btnClick}>Click Me!</Button>
        </React.Fragment>
    )
}

export default Homepage