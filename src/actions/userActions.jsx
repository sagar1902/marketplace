

export const loginUser = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGIN_USER_REQUEST' });

        const data = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" }
        });

        dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: 'LOGIN_USER_FAIL',
            payload: error.response.data.message,
        });
    }
}