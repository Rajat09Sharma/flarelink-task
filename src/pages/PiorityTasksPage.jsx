
import { useEffect, useState } from 'react';
import ShowTasksList from '../components/ShowTasksList'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar';
export default function PiorityTasksPage() {
  const tasks = useSelector(state => state.tasks.tasks);
  const [tasksList, setTasksList] = useState([]);

  function handleSearch(searchTasksList) {
    const piorityTasksList = searchTasksList.filter(task => task.completed == false && task.piority !== "");
    const sortedList = piorityTasksList.sort((a, b) => a.piority - b.piority);
    setTasksList(sortedList);
  }

  useEffect(() => {
    const piorityTasksList = tasks.filter(task => task.completed == false && task.piority !== "");
    const sortedList = piorityTasksList.sort((a, b) => a.piority - b.piority);
    setTasksList(sortedList);
  }, [tasks])

  return (
    <>
      <Navbar tasksList={tasks} onSearch={handleSearch} />
      {tasks.length !== 0 && <ShowTasksList tasksList={tasksList} />}
    </>
  )
}
