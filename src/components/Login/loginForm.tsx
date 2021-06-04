import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormsControls";
import {FormDataType} from "./loginPage";
import style from "./../common/formControls/FormsControls.module.css"


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[require]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[require]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Remember Me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>(
    //уникальное имя
    {form: "login"})(LoginForm)
export default LoginReduxForm