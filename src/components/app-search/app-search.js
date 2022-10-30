import { useState } from "react";
import "./search-panel.css"


const SearchPanel = (props) => {

    const [term, setTerm] = useState("");

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term)
        props.onUpdateFinder(term);
    }


    return (
        <input type="text" 
            className="form-control search-input"
            placeholder="Поиск по задачам"
            onChange={onUpdateSearch}/>
    )

}

export default SearchPanel;