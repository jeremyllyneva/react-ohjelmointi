const DeleteMessage = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="delete-message">
            {message}
        </div>
    )
}

export default DeleteMessage
