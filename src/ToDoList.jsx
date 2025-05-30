import React, { useState} from 'react'
function ToDoList(){

    const [tasks, setTasks ] = useState([]);
    const [newTask, setNewTask]= useState("");

    function handInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if (newTask.trim() !==""){
        setTasks(t =>[...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(){
        const updatedTask= tasks.filter((_,i) => i !== index);
        setNewTask(updatedTask);

    }

    function completeTask(){
        const updatedTask= tasks.filter((_,i) => i !== index);
        setNewTask(updatedTask);

    }

 

    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handInputChange}/>
             <button className="add-button" onClick={addTask}>
                add
             </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
            <li key={index}> 
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
                delete
            </button>
            <button className="Complete" onClick={() => completeTask(index)}>
             Complete
            </button>
            </li>

            )}


        </ol>

    </div>
    );

}
export default ToDoList