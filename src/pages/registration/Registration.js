import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { registrationFieldAgeChangedAC, registrationFieldEmailChangedAC, registrationFieldNameChangedAC, registrationFieldPasswordChangedAC, SignUp } from '../../store/action';
import styles from './Registration.module.css'

function Registration() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.data.registrationField);
    const registrationSuccess = useSelector(state => state.data.registration.success);

  return (
    <div className={styles.registration}>
        {
            registrationSuccess && <div className={styles.modal}>
                <p>Пользователь успешо зарегистрирован!</p>
                <button>
                    <NavLink to='/login'>
                        OK
                    </NavLink>
                </button>
            </div>
        }
        <div className={styles.registration__form}>
            <h2>Регистрация</h2>
            <div>
                <input value={state.email} onChange={(e) => dispatch(registrationFieldEmailChangedAC(e.target.value))} placeholder='Почта'/>
            </div>
            <div>
                <input value={state.password} onChange={(e) => dispatch(registrationFieldPasswordChangedAC(e.target.value))} placeholder='Пароль'/>
            </div>
            <div>
                <input value={state.name} onChange={(e) => dispatch(registrationFieldNameChangedAC(e.target.value))} placeholder='Имя'/>
            </div>
            <div>
                <input type='number' value={state.age} onChange={(e) => dispatch(registrationFieldAgeChangedAC(e.target.value))} placeholder='Возраст'/>
            </div>
            <div>
                <NavLink to='/login'>
                    Уже есть акаунт? Войти
                </NavLink>
            </div>
            <div>
                <button onClick={() => dispatch(SignUp(state))}>Зарегистрироваться</button>
            </div>
        </div>
    </div>
  )
}

export default Registration