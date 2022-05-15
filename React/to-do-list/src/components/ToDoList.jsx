import React, {useState} from 'react';

const ToDoList = () => {
    let [instructions, setInstructions] = useState("");
    let [completed, setCompleted] = useState(false);
    let [taskList, setTaskList] = useState([]);

    // ===============================================================
    // FUNCTION FOR THE SUBMIT BUTTON
    // ===============================================================
    const submitTask = (e) => {
        e.preventDefault();
        let task = {instructions, completed}
        setTaskList([...taskList, task]);

        // clear state
        setInstructions("");
        setCompleted(false);
    }


    // ===============================================================
    // FUNCTION FOR THE CHECKBOX BUTTON
    // ===============================================================
    const toggleCheckbox = (e, idx) => {
        let [...copyList] = taskList;
        copyList[idx].completed = e.target.checked;
        setTaskList(copyList);
    }

    const deleteTask = (e, idx) => {
        let filteredCopy = taskList.filter((task, i) => {
            return i !== idx
        })
        
        setTaskList(filteredCopy);
    }


    return(
        <>
            <h1>To-Do List!</h1>
            <h3>Enter a task in the box below and start creating your checklist for the day:</h3>
            <form onSubmit = {submitTask}>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input className="form-control" type="text" onChange = {(e) => {setInstructions(e.target.value)}} value={instructions}/>
                    <input className ="btn btn-primary mt-3" type="submit" value="Add" />
                </div>
            </form>
            <hr />
            <h3 style = {{textDecoration: "underline"}}>Your to-do list:</h3>
            <div className="task-list">
                {
                    taskList.map((taskObj,idx) => {
                        return (
                            <div className = "row" key={idx}>
                                <p className = "col-5" style = {{textDecoration: taskObj.completed? "line-through": "none"}}>{taskObj.instructions} <input type="checkbox" onChange = {(e)=>toggleCheckbox(e, idx)}/> </p>
                                <button onClick = {(e) => {deleteTask(e, idx)}} className = "btn btn-secondary m-2 col-1">Delete</button>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default ToDoList;