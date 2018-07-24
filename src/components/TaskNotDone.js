import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskNotDone extends Component {
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


	doneTask() {
		console.log(this.props.task);
		this.props.DoneTask(this.props.task);
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
					<li className="list-group-item bg-light text-dark">
						<div className="input-group mb-3">
						  <input 
						  	type="text" 
							  className="form-control" 
							  value={this.state.taskText} 
							  name='taskText'  
							  onChange={this.handleChange.bind(this)}
						  />
						  <div className="input-group-append">
						    <button className="btn btn-outline-success" type="button" onClick={this.editTask.bind(this)} >Save</button>
						  </div>
						</div>
					</li>
				)
		} else {
			return (
		    <li className="list-group-item bg-light text-dark" >
		    	<nav className="nav">
			    	<a href="#" className="nav-link" onClick={this.handleEdit.bind(this)}>edit </a>
			    	<a href="#" className="nav-link" onClick={this.isOpen.bind(this)}>{this.state.isOpen ? 'Close' : 'Open'} </a> 
			    	<a href="#" className="nav-link" onClick={this.doneTask.bind(this)}>done</a> 
		    	</nav>
		    	<div style={{display: this.state.isOpen ? 'block' : 'none'}}>
			    	TEXT: {task.text}
			    </div>

			     <span className="float-right">{task.created_at}</span>
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
		EditTask: (task) => {
			dispatch({type: 'EDIT_TASK', payload: task});
		},
		DoneTask: (task) => {
			dispatch({type: 'DONE_TASK', payload: task});
		},
	})
	)(TaskNotDone);