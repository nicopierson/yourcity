export const search = (searchString) => async (dispatch) => {

    const resources = ['city'];

    let searchArray = [];
    for (let key of resources) {
        searchArray.push(`${key}=${searchString}`);
    }
    console.log('fjasljflkjasl ************************************', searchString);
    const searchQuery = searchArray.join('&');



    const response = await fetch(`/api/search?${searchQuery}`);
    
    if (response.ok) {
        const results = await response.json();
        return results;
    } else {
        return {'errors': [ {'field': 'server', 'message': 'An error occurred. Please try again.'} ]};
    }
};