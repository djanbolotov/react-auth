import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import CustomInput from '../../components/custominput/CustomInput';
import { SignUp } from '../../store/action';
import styles from './Registration.module.css'
import { required, email } from '../../utils/validators/validators';


function RegistrationForm(props){
    return (
        <>
            <div>
                <Field validate={[required, email]} component={CustomInput} type='email' name='email' placeholder='Почта'/>
            </div>
            <div>
                <Field validate={[required]} component={CustomInput} type='password' name='password' placeholder='Пароль'/>
            </div>
            <div>
                <Field validate={[required]} component={CustomInput} name='name' placeholder='Имя'/>
            </div>
            <div>
                <Field validate={[required]} component={CustomInput} name='age' type='number' placeholder='Возраст'/>
            </div>
            <div>
                <NavLink to='/login'>
                    Уже есть акаунт? Войти
                </NavLink>
            </div>
            <div>
                <button onClick={props.handleSubmit}>Зарегистрироваться</button>
            </div>
        </>
    )
}

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm)


function Registration() {
    const dispatch = useDispatch();
    const registrationSuccess = useSelector(state => state.data.registration.success);

    const onSubmit = (formData) => {
        dispatch(SignUp(formData));
    }

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
            <RegistrationReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
  )
}

export default Registration