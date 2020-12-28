import './Tasks.css';
import tasks from './../../mockData/tasks.json';

export const Tasks = () =>{
    const actualTasks = tasks.filter(task => task.status !== 'pending');
    const taskList = actualTasks.map(task => (
        <div className="task__container" key={task.id}>
            {(task.status === "success")
                ?<i className="small material-icons task__icon-complete">check_circle</i>
                :<i className="small material-icons task__icon-failed">cancel</i>
            }
            <span className="task__description">{task.description}</span>
        </div>
    ));
    return (
        <>{taskList}</>
    )
}
