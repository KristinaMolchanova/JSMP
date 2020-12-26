import { getAchievements } from "./getAchievementsService";
import { ActualAchievement } from "../../interfaces/actualAchievement.interface";
import { Challenge } from "../../interfaces/challenge.interface";
import { ChallengeState } from "../../constants/challengeState";
import { ItemState } from "../../constants/ItemState";

const tasks = require("../../tasks");

describe('getAchievements', () => {
    const startDate = new Date('November 25, 2020 08:00:00');
    const actualAchievement: ActualAchievement = {
        id: 1,
        description: "",
        image: "",
        checkComplete: false,
        status: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")}
    }
    const challenges: Challenge[] = [
        {
            id: 1,
            state: ChallengeState.Success,
            startDate: startDate,
            tasksOrder: tasks,
            tasksStatus: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
            achievementsStatus: { state: ItemState.Pending, updated: new Date("2020-12-07T23:33:01.672Z")},
            achievements: [actualAchievement]
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
        const actualAchievement = getAchievements(4, challenges);
        expect(actualAchievement).toBeUndefined();
    });
    test('should return a current task', () => {
        const actualAchievement = getAchievements(1, challenges);
        const currentTask = [{id: 1,  description: "", image: "", checkComplete: false,
                            status: {
                                state: 'Pending', updated: new Date("2020-12-07T23:33:01.672Z")
                            }
                        }];
        expect(actualAchievement).toEqual(currentTask);
    });
});

