import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import CustomInput from '../../components/custominput/CustomInput';
import { LogIn } from '../../store/action';
import { required, email } from '../../utils/validators/validators';

import style from './Login.module.css';

function LoginForm(props) {
return (
    <>
        <Field placeholder={'Почта'} type='email' name={'email'} component={CustomInput} validate={[required, email]}/>
        <Field placeholder={'Пароль'} type='password' name={'password'} component={CustomInput} validate={[required]}/>
        <div>
            <NavLink to='/registration'>
                Зарегистрироваться?
            </NavLink>
        </div>
        <div>
            <button onClick={props.handleSubmit}>Войти</button>
        </div>
    </> 
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export function Login() {
    const disptach  = useDispatch();

    const onSubmit = (formData) => {
        disptach(LogIn(formData));
    }

    return (
        <div className={style.login}>
            <div className={style.login__form}>
                <h2> Войти </h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
      )
}

export default Login