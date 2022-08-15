import React from 'react'
import classes from "../styles/TaskDetails.module.css"


const TaskDetails = ({task, close}) => {

    const closeDetails = () => {
        close();
    }

  return (
    <div>
        <h2>Информация о задаче</h2>
        <div className={classes.main}>
            <p>Номер задачи: TSK-{task.task_number}</p>
            <div className={classes.status} style={{backgroundColor: task.importance.value === "MUST" ? "#A62211" : task.importance.value === "SHOULD" ? "#B5A036" : "#25A611"}}></div>
            <p className={classes.task}>{task.task_name}</p>
            <p>Имя: {task.name}</p>
            <p>Фамилия: {task.surname}</p>
            <p>Статус: {task.status}</p>
            <p>Важность: {task.importance.value}</p>
            <p>{task.dateAmount}</p>
            <p className={classes.close} onClick={closeDetails} style={{textDecoration: "underline", cursor: "pointer"}}>Закрыть подробности</p>
        </div>
    </div>
  )
}

export default TaskDetails