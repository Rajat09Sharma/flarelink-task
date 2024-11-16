import { useDispatch } from "react-redux"
import { modalActions, tasksActions } from "../store";

export default function CreateTask() {

  const dispatch = useDispatch();

  function handleTaskSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    // console.log(data);
    dispatch(tasksActions.createTask({ ...data }))
    dispatch(modalActions.closeModal(false))
  }


  return (
    <div className="py-3">
      <h1>Create New Task</h1>
      <form onSubmit={handleTaskSubmit}>
        <input type="text" name="taskName" className="w-75 me-2 p-2" required />
        <button type="submit" className="btn  btn-color mb-1">Add</button>
      </form>
    </div>
  )
}
