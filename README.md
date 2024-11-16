# Task Manager 📝🚀

This project is a Task Management Application built using React and Redux, enabling users to manage tasks effectively with an intuitive user interface and modern design patterns. 
The application provides functionalities like adding, deleting, and searching for tasks, along with some stretch features to enhance the user experience. 🎯


## 🚀 Live Demo
[🔗](https://venerable-bubblegum-c76508.netlify.app/)Check out the live project here.


![2024-11-16](https://github.com/user-attachments/assets/65d674f2-9c5e-49d6-8678-76d9cb47a214)


## 📂 Tech Stack
- Framework: React ⚛️
- State Management: Redux 🛠️
- Languages: JavaScript/TypeScript 💻
- Styling: Bootstrap 🎨
  
 
## 🌟 Features
### Basic Features
- ➕ Add Tasks: Users can create tasks by clicking the "Add Task" button.
- 🗑️ Delete Tasks: Remove unnecessary tasks from the list.
- 💾 Persist Tasks: Tasks are saved in local storage to maintain data across sessions.
- ✨ Stretch Goals
- 🔍 Task Search: Use the search bar in the Navbar to filter tasks.
- ✅ Task Completion: Mark tasks as completed to keep track of progress.
- 🏷️ Priority Setting: Assign priorities to tasks for better organization (future feature).
- 🔄 Task Sorting: Sort tasks by attributes like priority, due date, or completion status.
- 🎬 UI Animations: Enhances user experience with smooth transitions and animations.
  

## 📋 Project Structure
### Components
- Navbar: A responsive navigation bar that includes a search bar for filtering tasks.
- Button: A reusable button component for user actions.
- Modal: A popup modal to create new tasks.
- ShowTasksList: Dynamically displays a list of tasks based on the current filters.
  

## 🛠️ How It Works
### 1. Dynamic State Management:
- Tasks and modal visibility are managed using Redux.
T- he useSelector hook retrieves the application state, such as task data and modal state.
- The useDispatch hook is used to trigger actions like opening or closing the modal.

### 2. Conditional Rendering:
- If no tasks are present, a prompt is displayed to create a new task.
- The ShowTasksList component is only rendered when tasks exist.

### 3. Task Filtering:
- Uncompleted tasks are dynamically filtered and displayed using the useEffect hook.
- Searching through tasks filters them in real-time.

### 4. Reusable Modal:
- The modal pops up to allow the user to create tasks seamlessly.

### 5. Search Functionality:
- Tasks are filtered through the search bar based on user input, showing only relevant results.
  

## 📦 How to Run the Project
### Prerequisites:
#### 1. Install Node.js and npm.
#### 2. Clone the repository:
- git clone https://github.com/Rajat09Sharma/flarelink-task
- cd flarelink-task

#### 3. Steps:
##### Install dependencies:
- npm install
##### Run the project:
- npm start
- Open your browser and navigate to http://localhost:3000.



Enjoy using the Task Manager app! 📝✨

For any issues or suggestions, please reach out via the GitHub repository.
