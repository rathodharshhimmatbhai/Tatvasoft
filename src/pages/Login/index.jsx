import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Formik,Form,ErrorMessage} from "formik";
import {  Button, FormHelperText, TextField } from "@mui/material";
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authService from "../../services/authService";

import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Cookies from "js-cookie";
// const Login = () => {
//   return (
//     <>
//         <div className='main'>
//             <div className='Upper_section'>
//             <div className='links'>
//             <NavLink to={"/home"} style={({isActive})=>({color:isActive? "red" :"black"}) }>Home </NavLink>
//             <NavLink to={"/"} style={({isActive})=>({color:isActive? "red" :"black"}) }> &gt;  Login</NavLink>
//             </div>
//             <h1>Login Or Create an Account</h1>
//             <div className='underline'></div>
//             </div>
//             <div className='Lower_section'>
//                <div className='LeftSection'>
//                     <h3>New Customer</h3>
//                     <br></br>
//                     <small style={{color:"black"}}>Registration is free and easy</small>
//                     <ul>
//                         <li>Faster checkout</li>
//                         <li>Save Mutltiple Shipping addresses</li>
//                         <li>View and track orders and more</li>
//                     </ul>
//                     <Button variant="contained" style={{backgroundColor:"red",color:"whitesmoke"}}>Create an account</Button>
//                </div>
//                <div className='RightSection'>

//                </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Login;
const srcName =
  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp";
const Login = () => {
  const navigate=useNavigate();

  const validationSchema=yup.object().shape({
    email:yup.string().email().required("email is required"),
    password:yup.string().min(8).required("password must be atleast 8 characters")
  })
  const handleSubmit=async(values)=>{
    const payload={
       email:values.email,
       password:values.password
    }
    await authService.Login(values).then((res)=>{
        if(res && res.status===200){
           toast.success("Data Submitted Successfully")
        }
        navigate("/home");
        console.log(res);
        Cookies.set("auth_email",values.email);
    })
    .catch((e)=>{
      console.log(e);
       toast.error("Unable to login user");
    })
    
    // await axios.post("https://book-e-sell-node-api.vercel.app/api/user",values).then((res)=>{

    // });
  }
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={srcName} className="img-fluid" alt="sample_image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Formik initialValues={{email:"",password:""}}
              validationSchema={validationSchema}
              onSubmit={(values)=>handleSubmit(values)}
              >
                {({values,errors,setFieldValue,handleBlur}) => {
                  console.log(errors);
                  return (
                    <>
                      <Form>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                          <p className="lead fw-normal mb-0 me-3">
                            Sign in with
                          </p>
                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <FaFacebookF />
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <FaTwitter />
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <FaLinkedinIn />
                          </button>
                        </div>
                        <div className="divider d-flex align-items-center my-4">
                          <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        <div className="form-outline mb-4">
                          <TextField
                            type="email"
                            id="form3Example3"
                            name="email"
                            autoComplete="off"
                            label="Enter a Email"
                            className="form-control form-control-lg"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={(e)=>setFieldValue("email",e.target.value)}
                          />
                          <FormHelperText error>
                            <ErrorMessage name="email"/>
                          </FormHelperText>
                        </div>
                         
                        <div className="form-outline mb-3">
                          <TextField
                            type="password"
                            id="form3Example4"
                            name="password"
                            autoComplete="off"
                            className="form-control form-control-lg"
                            label={"password"}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={(e)=>setFieldValue("password",e.target.value)}
                          />
                          <FormHelperText error>
                            <ErrorMessage name="password"/>
                          </FormHelperText>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                          <Button
                            type="submit"
                            variant="contained"
                            className="btn btn-primary btn-lg"
                            style={{
                              paddingLeft: `${2.5}rem`,
                              paddingRight: `${2.5}rem`,
                            }}
                          >
                            Login
                          </Button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <a href="#!" className="link-danger">
                              Register
                            </a>
                          </p>
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
