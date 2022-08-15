import React from 'react';
import TaskItem from './TaskItem';
import { Draggable } from 'react-beautiful-dnd';
import classes from "../styles/TaskList.module.css"

const TaskList = ({tasks, status, getInfo, taskDetails}) => {
    const current_status = status === "PLAN" ? "На будущее" :
                           status === "IN PROGRESS" ? "В процессе" :
                           status === "TESTING" ? "Тестирование" :
                           "Выполнено"
    const current_status_id = status === "PLAN" ? "1" :
                           status === "IN PROGRESS" ? "2" :
                           status === "TESTING" ? "3" :
                           "4"

  return (
    <div>
        <h2 className={classes.title}>{current_status}</h2>
        <div className={classes.list}>
            {tasks.map((task, index) => (
                <Draggable key={String(task.task_number)} draggableId={String(task.task_number)} index={index}>
                    {(provided) => (
                        <div
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef}
                        >
                            <TaskItem clickedTask={taskDetails} getInfo={getInfo} index={index} key={task.task_number} status={status} task={task}/>
                        </div>
                    )}
                </Draggable>
            ))}
        </div>
    </div>
  )
}

export default TaskList 