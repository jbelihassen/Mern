import React from 'react'
import { useState } from 'react'


const Todo = (props) => {

    const [task, setTask] = useState()
    const [list, setList] = useState([])

    // Add Task
    const submitInput = (e) => {
        e.preventDefault()
        // const newTask = task
        setList([...list, { newTask: task, isDone: false }]);
        console.log(setList)
        // Empty input
        setTask('');
    }

    const deleteTask = (id) => {
        setList(list.filter((ele) => ele.id !== id));
      };



    return (
        <div>
            <form onSubmit={(e) => { submitInput(e) }}  >

                <label >Task :</label>
                <input type="text" placeholder='Add New Task' onChange={(e) => setTask(e.target.value)} value={task} />
                <div>
                    <button style={{ backgroundColor: 'blue', fontSize: "14px" }}>Add</button>
                </div>

            </form>

            <div>
                {/* {JSON.stringify(list)} */}

                {list.map((onetask, index) => {
                    return (

                        <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}  >

                            <p style={
                                onetask.isDone
                                    ? { textDecoration: 'line-through' }
                                    : { textDecoration: 'none' }
                            }         > {onetask.newTask}     </p>




                            <input type="checkbox" checked={onetask.isDone} onChange={() => {
                                setList((prevState) => {
                                    const newList = prevState.map((item,idx) => {
                                        return idx === index
                                            ? { ...item, isDone: !item.isDone }
                                            : item;
                                    });
                                    return newList;
                                });
                            }} />

                            <button style={{ backgroundColor: 'red', fontSize: "10px" }}   onClick={() => deleteTask(task.id)} >Delete</button>


                        </div>

                    )

                })}

            </div>





        </div>
    )
}

export default Todo