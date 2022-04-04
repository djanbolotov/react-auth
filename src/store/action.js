const axios = require('axios').default; 
const point = 'https://sheltered-dusk-77313.herokuapp.com';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_SUCCESS';

export const REGISTRATION_LOADING = 'REGISTRATION_LOADING';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const GET_LOADING = 'GET_LOADING';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

export const GET_USER_LIST_LOADING = 'GET_USER_LIST_LOADING';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_FAILED = 'GET_USER_LIST_FAILED';


export const LogIn = (data) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_LOADING});
        axios
        .post(point + '/auth/signin', data)
        .then(({data}) => {
            window.localStorage.setItem('token', data.token)
            typeof data.token == 'undefined'
            ? dispatch({type: LOGIN_FAILED})
            : dispatch({
                type: LOGIN_SUCCESS,
                payload: data.token
            })
        })
        .catch((e) => {
            dispatch({type: LOGIN_FAILED, payload: e})
        })
    }
}

export const SignUp = (data) => {
    return async (dispatch) => {
        data.age = parseInt(data.age);
        dispatch({type: REGISTRATION_LOADING});
        axios
        .post(point + '/auth/signup', data, {headers: {'Content-Type': 'application/json'}})
        .then(({data}) => {
            data.errors ? dispatch({type: REGISTRATION_FAILED})
            : dispatch({
                type: REGISTRATION_SUCCESS,
            })
        })
        .catch((e) => {
            dispatch({type: LOGIN_FAILED, payload: e})
        })
    }
}

export const GetAllUsers = () => {
    return async (dispatch) => {
        dispatch({type: GET_USER_LIST_LOADING});
        const token = window.localStorage.getItem('token');
        axios
        .get(point + '/users', { headers: {"Authorization" : `Bearer ${token}`} })
        .then(({data}) => {
            dispatch({type: GET_USER_LIST_SUCCESS, payload: data})
        })
        .catch((e) => {
            dispatch({type: GET_USER_LIST_FAILED, payload: e})
        })
    }
}

export const GetMe = () => {
    return async (dispatch) => {
        dispatch({type: GET_LOADING});
        const token = window.localStorage.getItem('token');
        axios
        .get(point + '/users/me', { headers: {"Authorization" : `Bearer ${token}`} })
        .then(({data}) => {
            if(data){
                dispatch({type: GET_SUCCESS, payload: data})
            }else{
                dispatch({type: GET_FAILED, payload: 'fuck'})
            }
        })
        .catch((e) => {
            dispatch({type: GET_FAILED, payload: e})
        })
    }
}