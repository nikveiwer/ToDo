import { useState } from "react";
import "./app-filter.css";

const AppFilter = (props) => {


    const [allTasks, setAllTasks] = useState(true);
    const [onlyLiked, setOnlyLiked] = useState(false);
    const [doneTasks, setDoneTasks] = useState(false);

    const [btnFirstColor, setBtnFirstColor] = useState(" btn-light");
    const [btnSecondColor, setBtnSecondColor] = useState(" btn-outlight-light");
    const [btnThirdColor, setBtnThirdColor] = useState(" btn-outlight-light");
    



    const changeButton = (btn, color) => {

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

        setBtnFirstColor(" btn-outline-light");
        setBtnSecondColor(" btn-outline-light");
        setBtnThirdColor(" btn-outline-light");

        switch (color) {
            case "btnFirstColor":
                setBtnFirstColor(" btn-light");
                break;
            case "btnSecondColor":
                setBtnSecondColor(" btn-light");
                break;
            case "btnThirdColor":
                setBtnThirdColor(" btn-light");
                break;            
        }


        props.onUpdateFilter(btn);
    }




    return (
        <div className="btn-group">
            <button className={`btn + ${btnFirstColor}`}
                    type="button"
                    onClick={() => changeButton("allTasks", "btnFirstColor")}>
                        Все задачи
            </button>
            <button className={`btn + ${btnSecondColor}`}
                    type="button"
                    onClick={() => changeButton("onlyLiked", "btnSecondColor")}>
                        В приоритете
            </button>
            <button className={`btn + ${btnThirdColor}`}
                    type="button"
                    onClick={() => changeButton("doneTasks", "btnThirdColor")}>
                        Сделанные задачи
            </button>
        </div>
    );
       
}


export default AppFilter;