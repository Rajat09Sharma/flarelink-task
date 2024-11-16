
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import PiorityTasksPage from "./pages/PiorityTasksPage";
import CompletedTaskPage from "./pages/CompletedTaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "piority-tasks",
        element: <PiorityTasksPage />
      },
      {
        path: "completed-tasks",
        element: <CompletedTaskPage />
      },
    ]
  }
])


function App() {


  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
