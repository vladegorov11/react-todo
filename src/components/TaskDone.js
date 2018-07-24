import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskDone extends Component {

	removeTask() {
		this.props.RemoveTask(this.props.task);
	}

	render(){

		const task = this.props.task
			return (
				<li className="list-group-item bg-success text-white">
	    		<div >
		    		{task.text}
		    	</div>
		     	{task.created_at}
		     	<button className="btn btn-primary float-right" onClick={this.removeTask.bind(this)}>remove</button> 
	    	</li>
			)

	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		RemoveTask: (task) => {
			dispatch({type: 'REMOVE_TASK', payload: task});
		}
	})
	)(TaskDone);