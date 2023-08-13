import Cookies from 'js-cookie'
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithAuth = (Component) => {
   const Authentication=()=>{
    const email=Cookies.get("auth_email");
    const navigate=useNavigate();
    useEffect(()=>{
        if(!email){
            navigate("/");
        }
    },[email]);
   return email ? <Component/> : null ;
   }
   return Authentication;
}

export default WithAuth;