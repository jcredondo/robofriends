import { CHANGE_SEARCH_FIELD } form './constants.js';

export const setSearchField = (text) => ({
	type: 'CHANGE_SEARCH_FIELD',
	payload: text
})