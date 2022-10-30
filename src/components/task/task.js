import TasksListItem from "../tasks-list-item/tasks-list-item"
import "./task.css";

const Task = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(i => {
        return (
            <TasksListItem 
                key={i.id}//Атрибут key нужен для оптимизации 
                task={i.task} 
                increase={i.increase}
                done={i.done}
                onDelete={() => onDelete(i.id)}
                onToggleProp={(e) => onToggleProp(i.id, e.currentTarget.getAttribute("data-toggle"))}/>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default Task;