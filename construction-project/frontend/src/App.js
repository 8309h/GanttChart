import React, { useState } from 'react';
import axios from 'axios';
import GanttChart from './GanttChart';
// import DetailedProcess from './DetailedProcess'

const App = () => {
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Number(duration));
    await axios.post('http://localhost:5000/tasks', { task, startDate, endDate, duration: Number(duration) });
    setTask('');
    setStartDate('');
    setDuration('');
  };

  return (
    <div>
      <h1>Construction Project Gantt Chart</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task: </label>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
        </div>
        <div>
          <label>Start Date: </label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label>Duration (days): </label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>
        <button type="submit">Add Task</button>
      </form>
      <GanttChart />
      </div>
  );
};

export default App;




// import React, { useState } from 'react';
// import axios from 'axios';
// import GanttChart from './GanttChart';
// import DetailedProcess from './DetailedProcess';

// const App = () => {
//   const [startDate, setStartDate] = useState('2024-07-28');
//   const length = 110; // Length of the wall
//   const productivity = 2; // Feet per day
//   const duration = length / productivity;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/tasks', { task: 'Build Wall Compound', startDate, duration });
//   };

//   return (
//     <div>
//       <h1>Construction Project Gantt Chart</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Start Date: </label>
//           <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//         </div>
//         <button type="submit">Add Task</button>
//       </form>
//       <GanttChart />
//       <DetailedProcess />
//     </div>
//   );
// };

// export default App;

