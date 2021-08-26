const SET_CITY = 'cities/setCity';
const SET_ALL_CITIES = 'cities/setAllCities';
const DELETE_CITY = 'cities/deleteCity';
const UNLOAD_CITIES = 'cities/unloadCities';

const setCity = (city) => ({
    type: SET_CITY,
    city,
});

const setAllCities = (cities) => ({
    type: SET_ALL_CITIES,
    cities,
});

const deleteCity = (id) => ({
    type: DELETE_CITY,
    cityId: id,
});

const unloadCities = () => ({
    type: UNLOAD_CITIES,
});

export const getCity = (id) => async (dispatch) => {
    const response = await fetch(`/api/cities/${id}`);
    
    if (response.ok) {
        const city = await response.json();
        await dispatch(setCity(city));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getAllCities = () => async (dispatch) => {
    const response = await fetch('/api/cities')
    
    if (response.ok) {
        const data = await response.json();
        await dispatch(setAllCities(data.cities));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const removeCity = (id) => async (dispatch) => {
    const response = await fetch(`/api/cities/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteCity(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const updateCity = (payload) => async(dispatch) => {
    const response = await fetch(`/api/cities/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const city = await response.json();
        await dispatch(setCity(city));
        return city;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const createCity = (payload) => async (dispatch) => {
    const response = await fetch(`/api/cities/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const city = await response.json();
        await dispatch(setCity(city));
        return city;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const resetCities = () => async (dispatch) => {
    await dispatch(unloadCities())
};

export default function reducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case SET_CITY:
            newState = { ...state };
            newState[action.city.id] = action.city;
            return newState;
        case SET_ALL_CITIES:
            action.cities.forEach(city => {
                newState[city.id] = city;
            });
            return { ...state, ...newState };
        case DELETE_CITY:
            newState = { ...state };
            delete newState[action.cityId];
            return newState;
        case UNLOAD_CITIES:
            newState = {}
            return newState;
        default:
            return state;
    }
}