import { getTaskArchive } from './getTaskArchiveService';
import { Challenge } from '../../interfaces/challenge.interface';
import { ChallengeState } from '../../constants/challengeState';
import { ItemState } from '../../constants/itemState';

const tasks = require("../../tasks");

describe('getTaskArchive', () => {
    const startDate = new Date('November 25, 2020 08:00:00');
    const challenges: Challenge[] = [
        {
            id: 1,
            state: ChallengeState.Success,
            startDate: startDate,
            tasksOrder: tasks,
            tasksStatus: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
            achievementsStatus: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
            tasksArchive: [{id: 1, description: "Go to bed before 11:00 PM", status: ItemState.Success}]
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
        const tasksArchive = getTaskArchive(4, challenges);
        expect(tasksArchive).toBeUndefined();
    });

    test('should returns all archive tasks with their results', () => {
        const tasksArchive = getTaskArchive(2, challenges);
        expect(tasksArchive).toEqual(challenges[1].tasksArchive);
    });
});