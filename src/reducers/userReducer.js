


export const userReducer = (state = {user:{}}, {type, payload}) => {
    switch (type) {
        case 'LOGIN_USER_REQUEST':
        case 'REGISTER_USER_REQUEST':
        case 'LOAD_USER_REQUEST':
            return {
                loading: true,
                isAuthenticated: false,
            };
        case 'LOGIN_USER_SUCCESS':
            return{
                isAuthenticated: true,
                user: payload
            }
        case 'REGISTER_USER_SUCCESS':
        case 'LOAD_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload,
            };
        case 'LOGOUT_USER_SUCCESS':
            return{
                loading: false,
                user: null,
                isAuthenticated: false,
            }
        case 'LOGIN_USER_FAIL':
        case 'REGISTER_USER_FAIL':
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: payload,
            }
        case 'LOAD_USER_FAIL':
            return{
                loading: false,
                isAuthenticated: false,
                user: null,
                error: payload,
            };
        case 'LOGOUT_USER_FAIL':
            return{
                ...state,
                loading: false,
                error: payload,
            };
        case 'CLEAR_ERRORS':
            return{
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const forgotPasswordReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'FORGOT_PASSWORD_REQUEST':
        case 'RESET_PASSWORD_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FORGOT_PASSWORD_SUCCESS':
            return {
                ...state,
                loading: false,
                message: payload,
            };
        case 'RESET_PASSWORD_SUCCESS':
            return {
                ...state,
                loading: false,
                success: payload,
            };
        case 'FORGOT_PASSWORD_FAIL':
        case 'RESET_PASSWORD_FAIL':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const userDetailsReducer = (state = { user: {} }, { type, payload }) => {
    switch (type) {
        case 'USER_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'USER_DETAILS_SUCCESS':
            return {
                loading: false,
                user: payload,
            };
        case 'USER_DETAILS_FAIL':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'USER_DETAILS_RESET':
            return {
                ...state,
                user: {},
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const allUsersReducer = (state = { users: [] }, { type, payload }) => {
    switch (type) {
        case 'ALL_USERS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'ALL_USERS_SUCCESS':
            return {
                loading: false,
                users: payload,
            };
        case 'ALL_USERS_FAIL':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const followUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'FOLLOW_USER_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FOLLOW_USER_SUCCESS':
            return {
                loading: false,
                success: payload.success,
                message: payload.message,
            };
        case 'FOLLOW_USER_FAIL':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'FOLLOW_USER_RESET':
            return {
                ...state,
                success: false,
                message: null,
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const profileReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'UPDATE_PROFILE_REQUEST':
        case 'UPDATE_PASSWORD_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'UPDATE_PROFILE_SUCCESS':
        case 'UPDATE_PASSWORD_SUCCESS':
            return {
                ...state,
                loading: false,
                isUpdated: payload,
            };
        case 'UPDATE_PROFILE_FAIL':
        case 'UPDATE_PASSWORD_FAIL':
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case 'UPDATE_PROFILE_RESET':
        case 'UPDATE_PASSWORD_RESET':
            return {
                ...state,
                isUpdated: false,
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};