import * as actionTypes from './action-Types'
import axios from '../../src/axios-order'

export const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        data: data
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
}

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const studentLogin = (data) => {
    console.log("data", data)
    return dispatch => {
        dispatch(loginStart())
        axios.post('https://dev.mathfactlab.com/api/v1/student-login', data)
            .then(response => {
                console.log(response.data)
                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                console.log("error", error)
                dispatch(loginFail(error))
            });
    }
};

export const teacherLoginSuccess = (data) => {
    return {
        type: actionTypes.TEACHER_LOGIN_SUCCESS,
        data: data
    };
};

export const teacherLoginFail = (error) => {
    return {
        type: actionTypes.TEACHER_LOGIN_FAIL,
        error: error
    };
}

export const teacherLoginStart = () => {
    return {
        type: actionTypes.TEACHER_LOGIN_START
    }
}

export const teacherLogin = (data) => {
    console.log("data", data)
    return dispatch => {
        dispatch(teacherLoginStart())
        axios.post('https://dev.mathfactlab.com/api/v1/login', data)
            .then(response => {
                console.log(response.data)
                dispatch(teacherLoginSuccess(response.data))
            })
            .catch(error => {
                console.log("error", error)
                dispatch(teacherLoginFail(error))
            });
    }
};