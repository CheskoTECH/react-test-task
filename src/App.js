import React, { useState, useEffect } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import dataGeneration from "./scripts/DataGeneration";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const [tasks, setTasks] = useState([...dataGeneration(30)]);

  const [taskDetails, setDetails] = useState({ data: 0 });

  const status_list = ["PLAN", "IN PROGRESS", "TESTING", "DONE"];

  const sorting = () => {
    setTasks(
      [...tasks].sort((a, b) => {
        return (
          a.name.localeCompare(b.name) ||
          a.importance.priority - b.importance.priority
        );
      })
    );
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) sorting();
    return () => {
      ignore = true;
    };
  }, []);

  const onDragEnd = (result) => {
    let reorderedTasks = Array.from(tasks);

    console.log(result);
    reorderedTasks.forEach((task) => {
      if (task.task_number === Number(result.draggableId)) {
        task.status =
          status_list[Number(result.destination.droppableId.split("_")[1])];
      }
    });

    setTasks(reorderedTasks);
  };

  const getInfo = (task) => {
    setDetails(task);
    console.log(task);
    console.log(taskDetails);
  };

  const closeDetails = () => {
    setDetails({ data: 0 });
  };

  return (
    <div className="App">
      <h1
        style={{
          margin: "50px 0",
          marginBottom: "40px",
          fontSize: "36px",
          fontWeight: "700",
        }}
      >
        Список задач
      </h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="task-board" style={{ marginBottom: "50px" }}>
          {status_list.map((status, index) => (
            <Droppable droppableId={"taskList_" + String(index)} key={index}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <TaskList
                    taskDetails={taskDetails}
                    status={status}
                    tasks={tasks.filter((task) => task.status === status)}
                    getInfo={getInfo}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      {taskDetails.data === 0 ? (
        ""
      ) : (
        <TaskDetails task={taskDetails} close={closeDetails} />
      )}
    </div>
  );
}

export default App;
