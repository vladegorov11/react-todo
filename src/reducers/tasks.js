const initialState = []

export default function tasks(state= initialState, action ) {
	if (action.type === 'ADD_TASK') {
		console.log(action.payload);
		return [
			...state,
			action.payload
		]
	}
	if (action.type === 'REMOVE_TASK') {
		return state.filter(task => task.id !== action.payload.id);
	}
	if (action.type === 'FETCH_TASKS') {
		state = action.payload;
		return state 
	}
	if (action.type === 'SEARCH_TASK') {
		let filter = state.filter(task => task.text.includes(action.payload))
		return filter
	}
	if (action.type === 'DONE_TASK') {
		state.forEach(function(task, i, arr) {
		  if (task.id === action.payload.id) {
		  	task.done = true
		  }
		});
	    return state 
	}
	if (action.type === 'EDIT_TASK') {
		state.forEach(function(task, i, arr) {
		  if (task.id === action.payload.id) {
		  	task.text = action.payload.editText
		  }
		});
	    return state 
	}
	return state;
}

