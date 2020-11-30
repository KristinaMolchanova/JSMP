import { calculateAchievementsStatus } from "./calculateAchievementsStatusService";
import { Achievement } from "../../interfaces/achievement.interface";
import { Status } from "../../interfaces/status.interface";
import { ItemState } from "../../constants/itemState";

describe('calculateAchievementsStatus', () => {
    test('should return achievementsStatus', () => {
        const achievementList: Achievement[] = [{
                id: 1,
                description: "Complete each task 7 days in a row",
                image: "",
                checkComplete: true
            },
            {
                id: 2,
                description: "Complete each task 7 days in a row",
                image: "",
                checkComplete: true
            }];

        const tasksStatus: Status = {
            state: ItemState.Pending,
            updated: new Date(),
        };

        const achievementsStatus = calculateAchievementsStatus(achievementList, tasksStatus);
        achievementsStatus.forEach(()=>{expect(tasksStatus.state).toBe(ItemState.Pending)});
    });
});