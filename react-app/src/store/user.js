const SET_USER = 'users/setUser';
const SET_ALL_USERS = 'users/setAllUsers';
const DELETE_USER = 'users/deleteUser';
const UNLOAD_USERS = 'users/unloadUsers';

const setUser = (user) => ({
    type: SET_USER,
    user,
});

const setAllUsers = (users) => ({
    type: SET_ALL_USERS,
    users,
});

const deleteUser = (id) => ({
    type: DELETE_USER,
    userId: id,
});

const unloadUsers = () => ({
    type: UNLOAD_USERS,
});

export const getUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`);
    
    if (response.ok) {
        const user = await response.json();
        await dispatch(setUser(user));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users/')
    
    if (response.ok) {
        const data = await response.json();
        await dispatch(setAllUsers(data.users));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const removeUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteUser(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const updateUser = (payload) => async(dispatch) => {
    const response = await fetch(`/api/users/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const user = await response.json();
        await dispatch(setUser(user));
        return user;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const createUser = (payload) => async (dispatch) => {
    const response = await fetch(`/api/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const user = await response.json();
        await dispatch(setUser(user));
        return user;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const resetUsers = () => async (dispatch) => {
    await dispatch(unloadUsers())
};

export default function reducer(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_USER:
            newState[action.user.id] = action.user;
            return newState;
        case SET_ALL_USERS:
            action.users.forEach(user => {
                newState[user.id] = user;
            });
            return newState;
        case DELETE_USER:
            delete newState[action.userId];
            return newState;
        case UNLOAD_USERS:
            newState = {}
            return newState;
        default:
            return state;
    }
}