import { Task } from "./../../interfaces/task.interface";
import { Challenge } from "./../../interfaces/challenge.interface";
import { ItemState } from "./../../constants/itemState";
import { ChallengeState } from "./../../constants/challengeState"
import {Achievement} from "../../interfaces/achievement.interface";

function shuffle<T>(array: T[]): T[] {

    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

export function startNewChallenge(
    tasks: Task[],
    challenges: Challenge[],
    challengeDuration: number = 30,
    achievementNumber: number = Math.floor(challengeDuration/6),
    achievements: Achievement[],): Challenge{

    const requiredAchievements: Achievement[] = [...achievements.slice(3)];
    const otherAchievements: Achievement[] = shuffle([...achievements.slice(0, 3)]);


    const challenge: Challenge = {
        id: challenges.length,
        state: ChallengeState.InProgress,
        startDate: new Date(),
        tasksOrder: shuffle(tasks),
        tasksStatus: {state: ItemState.Pending, updated: new Date()},
        achievementsStatus: {state: ItemState.Pending, updated: new Date()},
        achievements: [...requiredAchievements, ...otherAchievements].slice(0, achievementNumber)
    }
    return challenge;
};