import * as actionTypes from '../actions/action-Types';


const initialState = {
    login: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                login: true
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.TEACHER_LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.TEACHER_LOGIN_SUCCESS:
            return {
                ...state,
                login: true
            }
        case actionTypes.TEACHER_LOGIN_FAIL:
            return {
                ...state,
                loading: false
            }

        default: return state;
    }
}
export default reducer

