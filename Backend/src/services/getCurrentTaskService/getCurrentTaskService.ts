import { ActualTask } from "./../../interfaces/actualTask.interface";
import { Challenge } from "./../../interfaces/challenge.interface";
import { ItemState } from "./../../constants/ItemState";

export function getCurrentTask(challengeId: number, challenges: Challenge[]): ActualTask | undefined {

    const challenge: Challenge = challenges.find((challenge) => challenge.id === challengeId)!;

    if (!challenge) {
        return;
    }

    const dayOfChallenge = Math.floor(new Date("2020-12-07T23:33:01.672Z").getTime() - challenge.startDate.getTime()) + 1;

    const task = challenge.tasksOrder[dayOfChallenge];

    const currentTask: ActualTask = {
        ...task,
        status: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
    };

    return currentTask;
};