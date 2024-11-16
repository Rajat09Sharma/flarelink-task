

export default function Button({children ,onClick}) {
    return (
        <button type="button" className="btn btn-color" onClick={onClick}>{children}</button>
    )
}
