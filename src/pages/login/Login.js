import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginFieldEmailChangedAC, loginFieldPasswordChangedAC, LogIn } from '../../store/action';

import style from './Login.module.css';

function Login() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.data.loginField);

return (
    <div className={style.login}>
        <div className={style.login__form}>
            <h2> Войти </h2>
            <div>
                <input value={state.email} onChange={(e) => dispatch(loginFieldEmailChangedAC(e.target.value))} placeholder='Почта'/>
            </div>
            <div>
                <input value={state.password} onChange={(e) => dispatch(loginFieldPasswordChangedAC(e.target.value))} placeholder='Пароль'/>
            </div>
            <div>
                <NavLink to='/registration'>
                    Зарегистрироваться?
                </NavLink>
            </div>
            <div>
                <button onClick={() => dispatch(LogIn(state))}>Войти</button>
            </div>
        </div>
    </div>
  )
}

export default Login