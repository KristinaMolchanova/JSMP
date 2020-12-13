import { Achievement } from "../../interfaces/achievement.interface";
import { Status } from "../../interfaces/status.interface";

export function calculateAchievementsStatus(
    achievementList: Achievement[],
    tasksStatus: Status
): Map<number, boolean> {

    const achievementsStatus = new Map();

    achievementList.map((achievement) => achievementsStatus.set(achievement.id, tasksStatus));

    return achievementsStatus;
}