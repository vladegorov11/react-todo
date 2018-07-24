export default function filterTasks(state='', action ) {
	if (action.type === 'SEARCH_TASK') {
		console.log(action.payload);
		return action.payload;
	}
	return state;
}
