export const search = (searchString) => async (dispatch) => {

    const resources = ['city'];

    let searchString = [];
    for (let key in resources) {
        searchString.push(`${key}=${searchString}`);
    }
    const searchQuery = searchString.join('&');


    const response = await fetch(`/api/search?${searchQuery}`);
    
    if (response.ok) {
        const results = await response.json();
        return results;
    } else {
        return {'errors': [ {'field': 'server', 'message': 'An error occurred. Please try again.'} ]};
    }
};