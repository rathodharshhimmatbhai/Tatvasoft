import { Button, FormHelperText, TextField, Typography } from '@mui/material'
import React from 'react'
import { formStyles } from '../styles/formStyles'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import authService from '../services/authService';
import { toast } from 'react-toastify';
import axios from 'axios';

const Form1 = () => {
    const validationSchema = Yup.object().shape({
        userName:Yup.string().required("Username should not be empty"),
        email:Yup.string().email().required("Email should not be empty"),
        Password:Yup.string().min(8).required("Password should not be empty"),
        age:Yup.number().min(18),
    })
    const handleSubmit=async(values)=>{
        const payload={
          firstName:values.userName,
          lastName:"test",
          email:values.email,
          roleId:2,
          password:values.Password   
        }
        // console.log(values);
        axios.post("https://book-e-sell-node-api.vercel.app/api/user",payload)
        .then((res)=>{
            if(res && res.status===200){
                toast.success("data submitted successfully");
            }
        })
        .catch(e=>toast.warning("Unable to submit the Data"))
    //    await authService.Register(payload).then((res)=>{
    //     console.log(res);
        // if(res && res.code===200){
        //     toast("data submitted successfully");
        // }
    //    });
    }
    return (
        <Formik initialValues={{ userName: "", email: "", age: "", Password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values)=>handleSubmit(values)}
        >
            {({ values,errors, setFieldValue ,handleBlur}) => {
                
                return (
                    <Form>
                        <div style={{ ...formStyles.frm }}>
                            <Typography variant="h3" gutterBottom>
                                Register Here
                            </Typography>

                            <TextField
                                label="userName"
                                name="userName"
                                variant="outlined"
                                value={values.userName}
                                
                                onBlur={handleBlur}
                                onChange={(e) => setFieldValue("userName", e.target.value)}>
                            </TextField>
                    
                            <FormHelperText error>
                                <ErrorMessage name='userName'/>
                            </FormHelperText>
                            
                            <TextField
                                label="email"
                                name="email"
                                variant="outlined"
                                value={values.email}
                                
                                onBlur={handleBlur}
                                onChange={(e) => setFieldValue("email", e.target.value)}>
                            </TextField>

                            <FormHelperText error>
                                <ErrorMessage name='email'/>
                            </FormHelperText>

                            <TextField
                                label="age"
                                name="age"
                                variant="outlined"
                                value={values.age}
                                
                                onBlur={handleBlur}
                                onChange={(e) => setFieldValue("age", e.target.value)}>
                            </TextField>

                            <FormHelperText error>
                                <ErrorMessage name='age'/>
                            </FormHelperText>

                            <TextField
                                label="Password"
                                name="Password"
                                variant="outlined"
                                value={values.Password}
                                
                                onBlur={handleBlur}
                                onChange={(e) => setFieldValue("Password", e.target.value)}>
                            </TextField>

                            <FormHelperText error>
                                <ErrorMessage name='Password'/>
                            </FormHelperText>

                            <Button variant="contained" type="submit" >Submit</Button>
                        </div>
                    </Form>
                )
            }}

        </Formik>
    )
}
export default Form1