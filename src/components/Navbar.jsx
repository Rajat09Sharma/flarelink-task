
import { Link } from "react-router-dom";

export default function Navbar({ tasksList, onSearch }) {

    function handleSearch(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const { search } = Object.fromEntries(fd.entries());

        if (search == "") {
            onSearch(tasksList);

        } else {
            const newTasksList = tasksList.filter(task => {
                const searchableText = `${task.taskName}`
                return searchableText.toLowerCase().includes(search.toLowerCase());
            });
            onSearch(newTasksList);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Task Manager</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="/piority-tasks">Piority Tasks</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="/completed-tasks">Completed Tasks</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
