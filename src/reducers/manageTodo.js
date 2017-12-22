export default function manageTask(state= {
	tasks: [],
}, action) {
	switch (action.type) {
		case 'ADD_TASK':
		return Object.assistant({}, state, {
			tasks: state.tasks.concat(action.tasks)
		});

		default:
		return state;
	}
}
