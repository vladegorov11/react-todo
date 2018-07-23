import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import TaskList from './components/TaskList.js';
import AddForm from './components/AddForm.js';
import Search from './components/Search.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	constructor(props){
		super(props);
  	this.state = {
    	isLoading: true
    };
	}

	componentWillMount() {
		axios.get(`http://localhost:3000/tasks.json`)
	      .then(res => {
					this.props.FetchTasks(res.data);
	      })

	  setTimeout(function() {
        this.setState({isLoading : false});
    }.bind(this),1000);
  }

  render() {
		const Tasks = this.props.testStore.tasks
    return (
      <div className="container mt-4">
    		<div className="row"> 
    			<div className="col-md-6" > <AddForm/> </div>
    			<div className="col-md-6" > <Search/>  </div>
    		</div>
    		{this.state.isLoading ? <span>Loading...</span> : <TaskList tasks={Tasks}/>}
      </div>
    );
  }
}

export default connect(
	state => ({
		testStore: state //.tasks.filter(task => task.text.includes(state.filterTasks))
	}),
	dispatch => ({
		FetchTasks: (tasks) => {
			dispatch({type: 'FETCH_TASKS', payload: tasks});
		}
	}))(App);

