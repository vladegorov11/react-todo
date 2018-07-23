import axios from 'axios';

 export default const getTasks = () =>  {
  	axios.get(`http://localhost:3000/tasks.json`)
      .then(res => {
        const tasks = res.data;
        return tasks
      })
  }