import React, { useEffect, useRef, useState } from 'react';
import Gantt from 'frappe-gantt';
import axios from 'axios';
import 'frappe-gantt/dist/frappe-gantt.css';

const GanttChart = () => {
  const ganttRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        const tasks = response.data.map(task => ({
          id: task._id,
          name: task.task,
          start: task.startDate,
          end: task.endDate,
          progress: 100,
        }));
        setTasks(tasks);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      new Gantt(ganttRef.current, tasks, {
        view_mode: 'Day',
        on_click: (task) => {
          console.log(task);
        },
        on_date_change: (task, start, end) => {
          console.log(task, start, end);
        },
        on_progress_change: (task, progress) => {
          console.log(task, progress);
        },
        on_view_change: (mode) => {
          console.log(mode);
        },
      });
    }
  }, [tasks]);

  return <>
  <h1>Gantt Chart of Construction Project</h1>
  <div ref={ganttRef} id="GanntBYme"></div>

  </>
};

export default GanttChart;

