const initialState =  '';

export default function filterTasks(state= initialState, action ) {
	if (action.type === 'SEARCHss_TASK') {
		console.log(action.payload);
		return action.payload;
	}
	return state;
}
