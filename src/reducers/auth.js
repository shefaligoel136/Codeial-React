import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialAuthState = {
    user : {},
    error: null,
    isLoggedIn: false,
    isProgress: false
}

export default function auth(state= initialAuthState, action){
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                isProgress: true
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.user,
                isLoggedIn: true,
                isProgress: false,
                error: null
            };
        case LOGIN_FAILED:
            return{
                ...state,
                isProgress: false,
                error: action.error
            };
        default :
            return state;
    }
}