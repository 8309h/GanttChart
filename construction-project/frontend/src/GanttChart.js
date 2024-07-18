import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GanttChart = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  const data = tasks.map(task => ({
    name: task.task,
    startDate: new Date(task.startDate).getTime(),
    endDate: new Date(task.endDate).getTime(),
    duration: task.duration
  }));

  return (
    <BarChart width={1000} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="duration" fill="#8884d8" />
    </BarChart>
  );
};

export default GanttChart;
