
import "./App.css";
import Addtask from "./Components/Addtask";
import ListTask from "./Components/ListTask";


function App() {

    
  return (
    <>
      <h1 style={{ width: '60rem',backgroundColor: "#FF7A33"  }}>Todo List</h1>
      <Addtask/>
      <ListTask
      />
    </>
  );
}

export default App;
