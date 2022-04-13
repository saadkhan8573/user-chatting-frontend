import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterStyle } from './style'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, InputField, Paragraph } from '../../components';
import { UserActions } from '../../redux/actions/Auth';
import {NavLink} from 'react-router-dom';

export const Register = () => {
    const dispatch = useDispatch()
    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Email is not valid"),
        password: yup.string().required("Password is required").min(8, "Mis Length is 8")
    })

    const onSubmit = (values) => {
        console.log(values)
        dispatch(UserActions.RegisterUser(values))
    }

    return (
        <RegisterStyle>
            <h1>Register</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <InputField
                        name={"name"}
                        label={"Name"}
                        placeholder={"Your Name"}
                    />
                    <InputField
                        name={"email"}
                        label={"Email"}
                        placeholder={"Your Email"}
                        type={"email"}
                    />
                    <InputField
                        name={"password"}
                        label={"Password"}
                        placeholder={"Your Password"}
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        text={"REGISTER"}
                    />
                    <Paragraph
                        ParagraphText={'Already have an account'}
                        alignment={"center"}
                        weight={500}
                    />
                    <NavLink to="/login" style={{textAlign : 'center'}}>Login</NavLink>
                </Form>
            </Formik>
        </RegisterStyle>

    )
}