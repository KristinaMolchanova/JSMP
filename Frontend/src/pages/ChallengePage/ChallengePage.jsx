import './ChallengePage.css';
import {Tasks} from "../../components/Tasks/Tasks";
import {Achievements} from "../../components/Achievements/Achievements";
import {StartButton} from "../../components/StartButton/StartButton";
import tasks from './../../mockData/tasks.json';
import achievements from './../../mockData/achievements.json'

export const ChallengePage = () =>{
    const archieveTasks = tasks.filter(task => task.status !== 'pending');
    const actualAchievements = achievements.filter(achievement => achievement.status === 'success');
    const tasksCount = `${archieveTasks.length}/${tasks.length}`;
    const achievementsCount = `${actualAchievements.length}/${achievements.length}`;
    return (
        <div className="page-container">
            <h5 className="page-title">ChallengePage</h5>
            <p>Tasks: {tasksCount}</p>
            <Tasks/>
            <div className="achievements-container">
                <p className="achievements_title">Achievements: {achievementsCount}</p>
                <Achievements />
            </div>
            <div className="btn-container">
                <StartButton />
            </div>
        </div>
    )
}
