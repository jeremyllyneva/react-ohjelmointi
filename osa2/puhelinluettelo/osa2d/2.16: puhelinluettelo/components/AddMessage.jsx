const AddMessage = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="add-message">
            {message}
        </div>
    )
}

export default AddMessage
