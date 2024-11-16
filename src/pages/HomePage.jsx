import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Button"
import Modal from "../components/Modal";
import { modalActions } from "../store";
import ShowTasksList from "../components/ShowTasksList";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


export default function HomePage() {
    const tasks = useSelector(state => state.tasks.tasks);
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const [tasksList, setTasksList] = useState([]);
    const dispatch = useDispatch();

    function handleAddTask() {
        dispatch(modalActions.openModal(true))
    }

    function handleModalClose() {
        dispatch(modalActions.closeModal(false));
    }

    function handleSearch(searchTasksList) {
        const filterTasks = searchTasksList.filter(task => task.completed == false);
        setTasksList(filterTasks);
    }

    useEffect(() => {
        const filterTasks = tasks.filter(task => task.completed == false);
        setTasksList(filterTasks);
    }, [tasks])

    return (
        <>
            {isModalOpen && <Modal open={isModalOpen} onClose={handleModalClose} />}
            <Navbar tasksList={tasks} onSearch={handleSearch} />
            {tasks.length !== 0 && <ShowTasksList tasksList={tasksList} />}
            <div className="w-75 mx-auto my-5">
                <p className="text-end mt-5">
                    <button type="button" className="btn btn-success" onClick={handleAddTask}>Add Task</button>
                </p>
            </div>
        </>
    )
}

