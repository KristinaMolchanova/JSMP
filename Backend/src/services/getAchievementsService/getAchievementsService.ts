import { ActualAchievement } from "./../../interfaces/actualAchievement.interface";
import { Challenge } from "./../../interfaces/Challenge.interface";

export function getAchievements(challengeId: number, challenges: Challenge[]): ActualAchievement[] | undefined{

    const challenge: Challenge = challenges.find(challenge => challengeId === challenge.id)!;

    if (!challenge) {
        return;
    }
    const actualAchievement: ActualAchievement[] = challenge.achievements!;

    return actualAchievement;
}