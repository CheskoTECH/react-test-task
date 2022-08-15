import React, { useState } from 'react'
import classes from "../styles/TaskItem.module.css"

const TaskItem = ({task, index, getInfo, clickedTask}) => {

    const clickTask = () => {
        getInfo(task);
    }

  return (
            <div className={clickedTask === task ? classes.selectBorder : classes.item} onClick={clickTask}>
                <div className={classes.status} style={{backgroundColor: task.importance.value === "MUST" ? "#A62211" : task.importance.value === "SHOULD" ? "#B5A036" : "#25A611"}}></div>
                <p className={classes.taskNumber}>TSK-{task.task_number}</p>
                <p>{task.task_name}</p>
                {/* <p>Исполнитель: {task.name + " " + task.surname}</p>
                <p>Статус: {task.status}</p>
                <p>Важность: {task.importance.value}</p>
                <p>{task.dateAmount}</p> */}
            </div>
  )
}

export default TaskItem