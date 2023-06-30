import Todo from "./Task";
import { useSelector } from 'react-redux'
const ListTask = () => {
  const todos = useSelector((state) => state.todo)
  return (
    <>
      {todos.map((job) => <Todo job={job} />)}
    </>
  );
};

export default ListTask;
