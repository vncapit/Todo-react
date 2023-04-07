import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState({
    isShow: false,
    id: null,
    title: "",
  });

  const addTask = () => {
    const newId = toDo.length ? toDo[toDo.length - 1].id + 1 : 0;
    setToDo([...toDo, { id: newId, title: newTask, status: false }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    const newToDo = toDo.filter((item, index) => {
      return item.id !== id;
    });
    setToDo([...newToDo]);
  };

  const markDone = (id) => {
    let newTodo = toDo.map((item, index) => {
      return item.id !== id ? item : { ...item, status: !item.status };
    });
    setToDo(newTodo);
  };

  const updateTask = () => {
    if (updateData.id !== null) {
      setToDo([
        ...toDo.map((item, index) => {
          return item.id !== updateData.id
            ? item
            : { ...item, title: updateData.title };
        }),
      ]);
    }
    setUpdateData({ isShow: false, id: null, title: "" });
  };

  const editTask = (id) => {
    setUpdateData({
      ...updateData,
      id: id,
      isShow: true,
      title: toDo.find((item, index) => item.id === id).title,
    });
  };

  const cancelUpdate = () => {
    setUpdateData({ isShow: false, id: null, title: "" });
  };

  return (
    <div className="App container">
      <br></br>
      <h2>To Do List App</h2>
      <br></br>
      {/** Update task */}
      {updateData.isShow ? (
        <UpdateForm
          updateData={updateData}
          setUpdateData={setUpdateData}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/** Display tasks */}
      {toDo && toDo.length ? (
        ""
      ) : (
        <div>
          <br />
          "No Tasks..."
        </div>
      )}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
