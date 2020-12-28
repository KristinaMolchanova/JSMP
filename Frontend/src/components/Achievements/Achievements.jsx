import './Achievements.css';
import achievements from './../../mockData/achievements.json';

export const Achievements = () =>{
    const actualAchievements = achievements.filter(achievement => achievement.status === 'success');
    const achievementsList = achievements.map(achievement => (
        <div className="achievement" key={achievement.id}>
            {(actualAchievements.includes(achievement))
                ?<i className="medium material-icons achievement-icon achievement-icon--success">{achievement.image}</i>
                :<i className="medium material-icons achievement-icon">{achievement.image}</i>
            }
            <span>{achievement.description}</span>
        </div>
    ));

    return (
        <div className="achievements_container">

                {achievementsList}
        </div>
    )
}
