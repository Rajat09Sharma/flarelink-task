import { useEffect, useRef } from "react"
import CreateTask from "./CreateTask";
import Button from "./Button";


export default function Modal({ open, onClose }) {

    const dialogRef = useRef();

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [open])

    return (
        <dialog ref={dialogRef} onClose={onClose} className="w-50 modall">
            <CreateTask />
            <div className="text-end">
                <Button onClick={onClose}>Close</Button>
            </div>
        </dialog>
    )
}
