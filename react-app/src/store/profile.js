const SET_PROFILE = 'users/setProfile';
const SET_ALL_PROFILES = 'users/setAllProfiles';
const UNLOAD_PROFILES = 'users/unloadProfiles';

const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile,
});

const setAllProfiles = (profiles) => ({
    type: SET_ALL_PROFILES,
    profiles,
});

const unloadProfiles = () => ({
    type: UNLOAD_PROFILES,
});

export const getProfile = (id) => async (dispatch) => {
    const response = await fetch(`/api/profiles/${id}`);
    
    if (response.ok) {
        const profile = await response.json();
        await dispatch(setProfile(profile));
        return response;
    } else {
        return {'errors': [ {'field': 'server', 'message': 'An error occurred. Please try again.'} ]};
    }
};

export const getAllProfiles = () => async (dispatch) => {
    const response = await fetch('/api/profiles/')
    
    if (response.ok) {
        const data = await response.json();
        await dispatch(setAllProfiles(data.profiles));
        return response;
    } else {
        return {'errors': ['An error occurred. Please try again.']};
    }
};

export const updateProfile = (payload) => async(dispatch) => {
    const response = await fetch(`/api/profiles/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const profile = await response.json();
        await dispatch(setProfile(profile));
        return profile;
    } else {
        return {'errors': [ {'field': 'server', 'message': 'An error occurred. Please try again.'} ]};
    }
};

export const resetProfiles = () => async (dispatch) => {
    await dispatch(unloadProfiles())
};

export default function reducer(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_PROFILE:
            newState[action.profile.id] = action.profile;
            return newState;
        case SET_ALL_PROFILES:
            action.profiles.forEach(profile => {
                newState[profile.id] = profile;
            });
            return newState;
        case UNLOAD_PROFILES:
            newState = {}
            return newState;
        default:
            return state;
    }
}