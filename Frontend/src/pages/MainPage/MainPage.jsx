import './MainPage.css';
import tasks from './../../mockData/tasks.json';
import  {Achievements} from "../../components/Achievements/Achievements";
import {Header} from "../../components/Header/Header";

export const MainPage = () =>{
    const task = tasks.find(task => task.status === 'pending');

    const isDone = () => {
        const taskArchive = tasks.filter(task => task.status !== 'pending');

        if((tasks.length - taskArchive.length === 1)){
            window.location.href = "http://localhost:3000/challenge"
        }
    }

    return (
        <div className="page-container">
            <Header/>
            <h5 className="page-title">Hello my friend,</h5>
            <p>This is your small task for today:</p>
            <form>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in green" onChange={isDone}/>
                        <span className="task-description">{task.description}</span>
                    </label>
                </p>
            </form>
            <a href="http://localhost:3000/archive">Task Archive</a>
            <h5 className="achievements_title">Achievements:</h5>
            <Achievements />
        </div>
    )
}
