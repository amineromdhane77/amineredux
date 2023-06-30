import { useDispatch } from "react-redux";
import {addTodo} from"../Redux/todoSlice"
import { useState } from 'react';

const Addtask = () =>{
const dispatch = useDispatch()
const[title,setTitle]= useState("")


return(
    <
    
    >
    <input  style={{ background: 'yellow' ,textAlign: 'center' }}  onChange={(event)=>{setTitle(event.target.value)}} placeholder="set todo"/>
    <button  style={{ background: 'yellow' }}  onClick={()=>dispatch(addTodo(title))}>Add</button>
    </>
)
}

export default Addtask;