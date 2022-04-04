import { GET_FAILED, GET_LOADING, GET_SUCCESS, GET_USER_LIST_FAILED, GET_USER_LIST_LOADING, GET_USER_LIST_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, REGISTRATION_FAILED, REGISTRATION_LOADING, REGISTRATION_SUCCESS } from "./action"


const initialState = {
    user: null,
    token: null,
    userList: [],
    error: null,
    get: {
        success: false,
        failed: false,
        loading: false
    },
    login: {
        success: false,
        failed: false,
        loading: false
    },
    registration: {
        success: false,
        failed: false,
        loading: false
    },
    userListState: {
        success: false,
        failed: false,
        loading: false
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_LOADING: {
            return {
                ...state,
                login: {
                    success: false,
                    failed: false,
                    loading: true
                }
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: action.payload,
                login: {
                    success: true,
                    failed: false,
                    loading: false
                },
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                error: action.payload,
                login: {
                    success: false,
                    failed: true,
                    loading: false
                }
            }
        }
        case REGISTRATION_LOADING: {
            return {
                ...state,
                registration: {
                    success: false,
                    failed: false,
                    loading: true
                }
            }
        }
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                registration: {
                    success: true,
                    failed: false,
                    loading: false
                },
            }
        }
        case REGISTRATION_FAILED: {
            return {
                ...state,
                error: action.payload,
                registration: {
                    success: false,
                    failed: true,
                    loading: false
                }
            }
        }
        case GET_LOADING: {
            return {
                ...state,
                get: {
                    success: false,
                    failed: false,
                    loading: true
                }
            }
        }
        case GET_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                get: {
                    success: true,
                    failed: false,
                    loading: false
                },
                login: initialState.login,
                registration: initialState.registration
            }
        }
        case GET_FAILED: {
            return {
                ...state,
                error: action.payload,
                get: {
                    success: false,
                    failed: true,
                    loading: false
                }
            }
        }
        case GET_USER_LIST_LOADING: {
            return {
                ...state,
                userListState: {
                    success: false,
                    failed: false,
                    loading: true
                }
            }
        }
        case GET_USER_LIST_SUCCESS: {
            return {
                ...state,
                userList: action.payload,
                userListState: {
                    success: true,
                    failed: false,
                    loading: false
                },
            }
        }
        case GET_USER_LIST_FAILED: {
            return {
                ...state,
                error: action.payload,
                userListState: {
                    success: false,
                    failed: true,
                    loading: false
                }
            }
        }
        default:
            return state;
    }
}