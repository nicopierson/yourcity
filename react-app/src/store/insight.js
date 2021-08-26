const SET_INSIGHT = 'insights/setInsight';
const SET_ALL_INSIGHTS = 'insights/setAllInsights';
const DELETE_INSIGHT = 'insights/deleteInsight';
const UNLOAD_INSIGHTS = 'insights/unloadInsights';

const setInsight = (insight) => ({
    type: SET_INSIGHT,
    insight,
});

const setAllInsights = (insights) => ({
    type: SET_ALL_INSIGHTS,
    insights,
});

const deleteInsight = (id) => ({
    type: DELETE_INSIGHT,
    insightId: id,
});

const unloadInsights = () => ({
    type: UNLOAD_INSIGHTS,
});

export const getInsight = (id) => async (dispatch) => {
    const response = await fetch(`/api/insights/${id}`);
    
    if (response.ok) {
        const insight = await response.json();
        await dispatch(setInsight(insight));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getInsightsByUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/insights/users/${userId}`);

    if (response.ok) {
        const { insights } = await response.json();
        await dispatch(setAllInsights(insights));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getInsightsByCity = (cityId) => async (dispatch) => {
    const response = await fetch(`/api/insights/cities/${cityId}`);

    if (response.ok) {
        const { insights } = await response.json();
        await dispatch(setAllInsights(insights));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getAllInsights = () => async (dispatch) => {
    const response = await fetch('/api/insights/')
    
    if (response.ok) {
        const data = await response.json();
        await dispatch(setAllInsights(data.insights));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const removeInsight = (id) => async (dispatch) => {
    const response = await fetch(`/api/insights/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteInsight(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const updateInsight = (payload) => async(dispatch) => {
    const response = await fetch(`/api/insights/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const insight = await response.json();
        await dispatch(setInsight(insight));
        return insight;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const createInsight = (payload) => async (dispatch) => {
    const response = await fetch(`/api/insights/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const insight = await response.json();
        await dispatch(setInsight(insight));
        return insight;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const resetInsights = () => async (dispatch) => {
    await dispatch(unloadInsights())
};

export default function reducer(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_INSIGHT:
            newState[action.insight.id] = action.insight;
            return newState;
        case SET_ALL_INSIGHTS:
            action.insights.forEach(insight => {
                newState[insight.id] = insight;
            });
            return newState;
        case DELETE_INSIGHT:
            delete newState[action.insightId];
            return newState;
        case UNLOAD_INSIGHTS:
            newState = {}
            return newState;
        default:
            return state;
    }
}