import { Button, FormHelperText, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { formStyles } from '../styles/formStyles'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Form1 = () => {
    // const [userName, setUserName] = useState("");
    // const [Password, setPassword] = useState("");
    // const [userDetails, setUserDetails] = useState({
    //     userName: "",
    //     email: "",
    //     age: "",
    //     Password: "",
    // });

    // const handleSubmit = () => {
    //     console.log("UserName: ", userDetails.userName);
    //     console.log("email: ", userDetails.email);
    //     console.log("UserName: ", userDetails.age);
    //     console.log("Password:", userDetails.Password);
    // }

    const validationSchema = Yup.object().shape({
        userName:Yup.string().required("Username should not be empty"),
        email:Yup.string().required("Email should not be empty"),
        age:Yup.string().required("Age should not be empty"),
        Password:Yup.string().required("Password should not be empty")
    })

    // useEffect(
    //     ()=>{
    //         if(userName){
    //             console.log("Hello");
    //         }
    //     },
    //     [userName]
    // );

    // console.log("Hello");
    return (
        <Formik initialValues={{ userName: "", email: "", age: "", Password: "" }}
            validationSchema={validationSchema}
        >
            {({ values,errors, setFieldValue }) => {
                console.log(errors);    
                return (
                    <Form>
                        <div style={{ ...formStyles.frm }}>

                            <Typography variant="h3" gutterBottom>
                                Login Here
                            </Typography>

                            <TextField
                                label="userName"
                                name="userName"
                                variant="outlined"
                                value={values.userName}
                                onChange={(e) => setFieldValue("userName", e.target.value)}>
                            </TextField>
                    
                            <FormHelperText>
                                <ErrorMessage name='userName'/>
                            </FormHelperText>
                            {/* <TextField label="Outlined" variant="outlined" /> */}

                            <TextField
                                label="email"
                                name="email"
                                variant="outlined"
                                value={values.email}
                                onChange={(e) => setFieldValue("email", e.target.value)}>
                            </TextField>

                            <FormHelperText>
                                <ErrorMessage name='email'/>
                            </FormHelperText>

                            <TextField
                                label="age"
                                name="age"
                                variant="outlined"
                                value={values.age}
                                onChange={(e) => setFieldValue("age", e.target.value)}>
                            </TextField>

                            <FormHelperText>
                                <ErrorMessage name='age'/>
                            </FormHelperText>

                            <TextField
                                label="Password"
                                name="Password"
                                variant="outlined"
                                value={values.Password}
                                onChange={(e) => setFieldValue("Password", e.target.value)}>
                            </TextField>

                            <FormHelperText>
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