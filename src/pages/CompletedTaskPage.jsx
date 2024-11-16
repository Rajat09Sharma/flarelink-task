
import { useEffect, useState } from 'react';
import ShowTasksList from '../components/ShowTasksList'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar';

export default function CompletedTaskPage() {
  const tasks = useSelector(state => state.tasks.tasks);
  const [tasksList, setTasksList] = useState([]);

  function handleSearch(searchTasksList) {
    const filterTasks = searchTasksList.filter(task => task.completed == true);
    setTasksList(filterTasks);
  }

  useEffect(() => {
    const filterTasks = tasks.filter(task => task.completed == true);
    setTasksList(filterTasks);
  }, [tasks])

  return (
    <>
      <Navbar tasksList={tasks} onSearch={handleSearch} />
      {tasks.length !== 0 && <ShowTasksList tasksList={tasksList} />}
    </>
  )
}
