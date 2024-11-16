import { createSlice, configureStore } from "@reduxjs/toolkit"


const tasks = JSON.parse(localStorage.getItem("tasks"));
let taskList;
if (!tasks) {
    taskList = [];
} else {
    taskList = [...tasks];
}

const initialTaskState = { tasks: taskList }
const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialTaskState,
    reducers: {
        createTask(state, { payload }) {
            let newTaskId;
            // console.log(payload.taskName);
            if (state.tasks.length === 0) {
                newTaskId = 1;
            } else {
                newTaskId = state.tasks[0].id + 1;
            }
            const newTask = {
                id: newTaskId,
                taskName: payload.taskName,
                piority: "",
                completed: false,
            }
            // console.log(newTask);
            const newTaskList = [newTask, ...state.tasks];
            state.tasks = [...newTaskList];
            localStorage.setItem("tasks", JSON.stringify(newTaskList));
        },
        deleteTask(state, { payload }) {
            // console.log(payload);
            const prevsTasks = [...state.tasks];
            const updatedTaskList = prevsTasks.filter(task => task.id !== payload.id)
            state.tasks = [...updatedTaskList];
            localStorage.setItem("tasks", JSON.stringify(updatedTaskList));

        },
        editTask(state, { payload }) {
            const taskList = [...state.tasks];
            const editTaskIndex = taskList.findIndex(task => task.id == payload.data.id);
            const editTask = taskList[editTaskIndex];
            if (payload.data.piority) {
                editTask.piority = payload.data.piority;
            }
            if (payload.data.completed) {

                editTask.completed = payload.data.completed;
            }
            state.tasks = [...taskList];
            localStorage.setItem("tasks", JSON.stringify(taskList));
        },
        searchTasks(state, { payload }) {
            // console.log(payload.tasks);
            const updatedTaskList = payload.tasks;
            state.tasks = [...updatedTaskList]
            localStorage.setItem("tasks", JSON.stringify(updatedTaskList));

        },

    }

});

const initialModalState = { isOpen: false };
const modalSlice = createSlice({
    name: "modal",
    initialState: initialModalState,
    reducers: {
        openModal(state, { payload }) {
            // console.log( payload);
            state.isOpen = payload
        },
        closeModal(state, { payload }) {
            state.isOpen = payload
        }
    }
})


const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        modal: modalSlice.reducer
    }
});


export const tasksActions = tasksSlice.actions;
export const modalActions = modalSlice.actions;
export default store;