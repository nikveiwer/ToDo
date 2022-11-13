import { useState, useEffect } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import Task from "../task/task";
import TasksAddForm from "../tasks-add-form/tasks-add-form";

import "./app.css";

const App = () => {

    // [
    //     {task: "Уборка", increase: true, done: true, id: 1},
    //     {task: "Сходить в магазин", increase: false, done: false, id: 2},
    //     {task: "Помыть посуду",increase: false, done: true, id: 3},
    //     {task: "Учеба",increase: true, done: false, id: 4}
    // ]

    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) :     [
        {task: "Уборка", increase: true, done: true, id: 1},
        {task: "Сходить в магазин", increase: false, done: false, id: 2},
        {task: "Помыть посуду",increase: false, done: true, id: 3},
        {task: "Учеба",increase: true, done: false, id: 4}
    ]);
    const [term, setTerm] = useState("");
    const [allTasks, setAllTasks] = useState(true);
    const [onlyLiked, setOnlyLiked] = useState(false);
    const [doneTasks, setDoneTasks] = useState(false);

    

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    useEffect(() => {
        if (!localStorage.getItem("minId")) {
            localStorage.setItem("minId", 5)
        }
    }, [])

    const deleteItem = (id) => {
        setData((data) => {
            return data.filter(item => item.id !== id) 
        })
    }


    const addItem = (task) => {
        if (task !== "") {
            setData((data) => {
                
                return [...data, 
                    {task: task, increase: false, done: false, id: localStorage.getItem("minId")}
                ];

            })
            let newMinId = Number(localStorage.getItem("minId")) + 1
            localStorage.setItem("minId", newMinId);
        }
    }


    const onToggleProp = (id, prop) => {
        setData((data) => {

            return data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })

            }
        )
    }
    


    const tasksCounter = () => {
        return data.length
    }

    const tasksIncrease = () => {
        let k = 0;
        data.forEach(i => {
            if (i.increase == true) {
                k++
            }
        })
        return k;
    }


    const onUpdateFinder = (term) => {
        setTerm(term)
    }



    const finder = (items, term) => {
        if (term.length === 0 ) {
            return items;
        }

        return items.filter(i => {
            return i.task.toUpperCase().indexOf(term.toUpperCase()) > -1
        })
    }



    const filter = (items, btnFirst, btnSecond, btnThird) => {
        if (btnFirst) {
            // return items;
            return [...items.filter(i => {return i.increase == true && i.done != true}), ...items.filter(i => {return (i.increase !== true && i.done !== true)}), ...items.filter(i => {return i.done == true})];
        }

        if (btnSecond) {
            return items.filter(i => {return (i.increase === true && i.done === false)});
        } 

        if (btnThird) {
            return items.filter(i => {return i.done == true});
        }

    }

    const onUpdateFilter = (btn) => {

        setAllTasks(false);
        setOnlyLiked(false);
        setDoneTasks(false);

        switch (btn) {
            case "allTasks":
                setAllTasks(true);
                break;
            case "onlyLiked":
                setOnlyLiked(true);
                break;
            case "doneTasks":
                setDoneTasks(true);
                break;            
        }
            
    }


    const inItemValue = (id, newSalary) => {

            setData((data) => {
                return data.map(item => {
                    if (item.id === id) {
                        return {...item, salary: newSalary};
                    }
                    return item;
                })
                
            })
    }



    const count = data.length;
    const dones= data.filter(i => i.done).length;
    const visibleData = finder(data, term);

    const overData = filter(visibleData, allTasks, onlyLiked, doneTasks);

    return (
        <div className="app">
            <AppInfo
                count={count}
                dones={dones}/>

            <div className="search-panel">
                <SearchPanel
                    onUpdateFinder={onUpdateFinder}/>
                <AppFilter
                    onUpdateFilter={onUpdateFilter}/>
            </div>

            <Task 
                data={overData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}/>
            
            <TasksAddForm
                addItem={addItem}/>

        </div>
    )
}     
        


export default App