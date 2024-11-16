import { useDispatch } from "react-redux";
import Button from "./Button";
import { tasksActions } from "../store";


export default function Task({ title, id, isCompleted, piority }) {
    const dispatch = useDispatch();

    function handleTaskDelete() {
        dispatch(tasksActions.deleteTask({ id }))
    }

    function handlePioritySelect(event) {
        const value = event.target.value;
        dispatch(tasksActions.editTask({ data: { id, piority: value } }))
    }

    function handleCompleteClick() {
        dispatch(tasksActions.editTask({ data: { id, completed: true } }));
    }

    return (
        <div className="task-container" data-aos="fade-right" data-aos-duration="1000">
            <h1>{title}</h1>
            <div className="function-box">
                {!isCompleted && <select className="form-select mx-3" aria-label="Default select example" onChange={handlePioritySelect}>
                    <option >Select Piority</option>
                    <option value="1" selected={piority == 1 ? true : false}>High</option>
                    <option value="2" selected={piority == 2 ? true : false}>Medium</option>
                    <option value="3" selected={piority == 3 ? true : false}>Low</option>
                </select>}
                {isCompleted ? <p>Task Completed</p> : <Button onClick={handleCompleteClick} >Completed</Button>}
                <button type="button" className="ms-3 btn btn-danger" onClick={handleTaskDelete}>Dlete</button>
            </div>
        </div>
    )
}
