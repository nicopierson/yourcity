export const search = (payload) => async (dispatch) => {

    let searchString = [];
    for (let key in payload) {
        let item = payload[key];
        searchString.push(`${key}=${item}`)
    }
    const searchQuery = searchString.join('&')


    const response = await fetch(`/api/search?${searchQuery}`);
    
    if (response.ok) {
        const results = await response.json();
        return results;
    } else {
        return {'errors': [ {'field': 'server', 'message': 'An error occurred. Please try again.'} ]};
    }
};