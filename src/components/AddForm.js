import React, { Component } from 'react';
import {connect} from 'react-redux';
import strftime from 'strftime' ;
class AddForm extends Component {
	addTask() {
		this.props.AddTask({id: Rand(1, 1000) ,
							text:this.taskInput.value,
							done: false, 
							created_at: strftime('%m/%d/%Y %H:%M') });
		this.taskInput.value = '';
	}

	render(){
		return (
		    <div className="input-group mb-3">
			  <input type="text" className="form-control"  ref={(input) => {this.taskInput = input}}/>
			  <div className="input-group-append">
			    <button className="btn btn-outline-secondary" type="button" onClick={this.addTask.bind(this)} >Add task</button>
			  </div>
			</div>
		)
	}
}

const Rand = (min, max) => (
	Math.floor(Math.random() * (max - min)) + min
)

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		AddTask: (taskName) => {
			dispatch({type: 'ADD_TASK', payload: taskName});
		}
	})
)(AddForm);