import { ActualTask } from "./../interfaces/actualTask.interface";
import { Challenge } from "./../interfaces/challenge.interface";

export type startNewChallenge = (
    taskList: Array<ActualTask>,
    challengeList: Array<Challenge>,
    challengeDuration: 30,
    achievementNumber: 6
) => Challenge;