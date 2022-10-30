
import "./app-info.css";

const AppInfo = ({count, dones}) => {
    return (
        <div className="app-info">
            <h1>Todos</h1>
            <h2>Всего задач: {count}</h2>
            <h2>Выполненных: {dones}</h2>
        </div>
    )
}

export default AppInfo