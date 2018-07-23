import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component {
	
	searchTask() {
		this.props.SearchTask(this.taskSearch.value);
		this.taskSearch.value = '';
	}

	render(){
		return (
	    <div className="input-group mb-3">
			  <input type="text" className="form-control"  ref={(input) => {this.taskSearch = input}}/>
			  <div className="input-group-append">
			    <button className="btn btn-outline-secondary" type="button" onClick={this.searchTask.bind(this)} >Search Task</button>
			  </div>
			</div>
		)
	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		SearchTask: (taskName) => {
			dispatch({type: 'SEARCH_TASK', payload: taskName});
		}
	})
	)(Search);