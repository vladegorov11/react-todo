import React, { Component } from 'react';
import {connect} from 'react-redux';

class Task extends Component {
	constructor(props){
		super(props);
  	this.state = {
    	isOpen: true,
    	isEditing: false,
    	taskText:  this.props.task.text
    };
	}
	editTask() {
		this.props.EditTask({id: this.props.task.id, editText: this.state.taskText });
		this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
	}
	removeTask() {
		this.props.RemoveTask(this.props.task);
	}

	isOpen() {
		this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
	}

	handleChange(e) {
    this.setState ({[e.target.name]: e.target.value});
  }

  handleEdit() {
  	this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  }

	render(){
		const task = this.props.task
		if (this.state.isEditing) {
			return (
					<div>
						<input 
							name='taskText'
							value={this.state.taskText} 
							onChange={this.handleChange.bind(this)}
						/>
						<button 
							onClick={this.editTask.bind(this)}> save </button>
					</div>
				)
		} else {
			return (
		    <li >
		    	<a onClick={this.handleEdit.bind(this)}>edit</a>
		    	<a onClick={this.isOpen.bind(this)}>{this.state.isOpen ? 'Close' : 'Open'}</a> 
		    	<div style={{display: this.state.isOpen ? 'block' : 'none'}}>
			    	{task.text}
			    </div>
			    <button onClick={this.removeTask.bind(this)}>remove</button> 
			    {task.dateTime.getFullYear()}
		    </li>
			)
		}
	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		RemoveTask: (task) => {
			dispatch({type: 'REMOVE_TASK', payload: task});
		},
		EditTask: (task) => {
			dispatch({type: 'EDIT_TASK', payload: task});
		},
	})
	)(Task);