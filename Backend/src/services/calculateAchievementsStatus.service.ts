import { ActualAchievement } from "./../interfaces/actualAchievement.interface";
import { ActualTask } from "./../interfaces/actualTask.interface";

export type calculateAchievementsStatus = (
    achievementList: ActualAchievement[],
    taskStatus: ActualTask['status']
)=> ActualAchievement['status']