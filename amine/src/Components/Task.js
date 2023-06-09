import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, doneNotDone } from "../Redux/todoSlice";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineRemoveDone } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";



const Task = ({ job }) => {
 
  const dispatch = useDispatch();
  return (
    <div Style="display:flex ;background-color:#FA5217;margin: 5px 30px; width; justify-content:space-between;border-radius:20px;padding:5px">
      <h1 Style="padding: 3px 10px;color:#4D1907">{job.title}</h1>
      <span > {job.isDone ? <IoMdDoneAll /> : <MdOutlineRemoveDone />}</span>
      <div Style="display: inline-block">
        
        <button onClick={() => dispatch(deleteTodo(job.id))}>
          <FiDelete />
        </button>
        <button onClick={() => dispatch(editTodo(job.id))}>
          <AiOutlineEdit />
        </button>
        <button onClick={() => dispatch(doneNotDone(job.id))}>
          <MdDownloadDone />
        </button>
      </div>
    </div>
  );
};

export default Task;
