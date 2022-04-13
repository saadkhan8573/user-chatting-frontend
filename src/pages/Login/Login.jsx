import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginStyle } from './style'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, InputField, Paragraph } from '../../components';
import { NavLink,useNavigate } from 'react-router-dom';
import { UserActions } from '../../redux/actions';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { success } = useSelector(state => state.loginReducer)

    useEffect(() => {
        success && navigate("/")
    }, [success])

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = yup.object({
        email: yup.string().required("Email is required").email("Its not a valid email"),
        password: yup.string().required("Password is required").min(8, "Min Length is 8")
    })

    const onSubmit = (values) => {
        dispatch(UserActions.LoginUser(values))
        console.log(values)
    }

    return (
        <LoginStyle>
            <h1>Login</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
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
                        text={"LOGIN"}
                    />
                    <Paragraph
                        ParagraphText={'create an account'}
                        alignment={"center"}
                        weight={500}
                    />
                    <NavLink to="/register" style={{ textAlign: 'center' }}>Register</NavLink>
                </Form>
            </Formik>
        </LoginStyle>

    )
}