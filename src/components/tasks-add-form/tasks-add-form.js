import "./tasks-add-form.css";
import { useState } from "react";


const TasksAddForm = (props) => {


    const [task, setTask] = useState("");

    const onValueChange = (e) => {
        setTask(e.target.value);
    }

    const submitConfirm = (e) => {
        e.preventDefault();

        props.addItem(task);

        setTask("");

    }



    return (
        <div className="app-add-form">
            <h3>Добавьте новую задачу</h3>
            <form
                className="add-form d-flex"
                onSubmit={submitConfirm}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Введите, что хотите выпонить"
                    name="task"
                    value={task}
                    onChange={onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )

}

export default TasksAddForm;