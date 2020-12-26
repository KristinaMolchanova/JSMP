import { getCurrentTask } from "./getCurrentTaskService";
import { ActualTask } from "../../interfaces/actualTask.interface";
import { Challenge } from "../../interfaces/challenge.interface";
import { ChallengeState } from "../../constants/challengeState";
import { ItemState } from "../../constants/ItemState";

const tasks = require("../../tasks");

describe('getCurrentTask', () => {
    const startDate = new Date('November 25, 2020 08:00:00');
    const challenges: Challenge[] = [
        {
            id: 1,
            state: ChallengeState.Success,
            startDate: startDate,
            tasksOrder: tasks,
            tasksStatus: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
            achievementsStatus: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
        },
        {
            id: 2,
            state: ChallengeState.Success,
            startDate: startDate,
            tasksOrder: tasks,
            tasksStatus:{ state: ItemState.Success, updated: new Date("2020-12-07T23:33:01.672Z")},
            achievementsStatus: { state: ItemState.Success, updated: new Date("2020-12-07T23:33:01.672Z")}
        },
        {
            id: 3,
            state: ChallengeState.Failure,
            startDate: startDate,
            tasksOrder: tasks,
            tasksStatus: { state: ItemState.Failure, updated: new Date("2020-12-07T23:33:01.672Z")},
            achievementsStatus: { state: ItemState.Failure, updated: new Date("2020-12-07T23:33:01.672Z")}
        },
    ];

    test('should return undefined if the challenge not found', () => {
        const currentTask = getCurrentTask(4, challenges);

        expect(currentTask).toBeUndefined();
    });

    test('should return a current task status', () => {
        const currentTask = getCurrentTask(1, challenges);
        const result = {
            status: {state: 'Pending', updated: new Date("2020-12-07T23:33:01.672Z")}
        }
        expect(currentTask).toEqual(result);
    });
});