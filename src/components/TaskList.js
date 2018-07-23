import React from 'react';
import TaskNotDone from './TaskNotDone.js';
import TaskDone from  './TaskDone.js';
export default function TaskList(props) {

  	const taskList = props.tasks.filter(task => task.done !== true).map((task, index) => 
			 			  					<TaskNotDone key={index} task={task}/>
			 								);
  	const taskDone = props.tasks.filter(task => task.done !== false ).map((task, index) => 
			 			  					<TaskDone key={index} task={task}/>
			 								);
  	console.log('list',props.tasks);
	  return (
	    <div className='row'>
		    <div className='col-md-6'>
		    	<h3 className="text-center"> Unfinished </h3>
			    <ul className="list-group">
			    	{taskList}
			    </ul>
			  </div>
			  <div className='col-md-6'>
			  	<h3 className="text-center"> Done </h3>
			    <ul className="list-group">
			    	{taskDone}
			    </ul>
		    </div>
	    </div>

	  );
}
