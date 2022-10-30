import "./tasks-list-item.css";

const TasksListItem = (props) => {
    
    const {task, onDelete, onToggleProp, increase, done} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (done) {
        classNames += " increase";
    } 
    if (increase) {
         classNames += " done";
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} data-toggle="increase" className="list-group-item-label">
                {task} 
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="done"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    
}

export default TasksListItem;