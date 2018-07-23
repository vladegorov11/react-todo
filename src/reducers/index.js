import {combineReducers} from 'redux';
import tasks from './tasks.js'
import filterTasks from './filterTasks.js'

export default combineReducers({
	tasks,
	filterTasks
})