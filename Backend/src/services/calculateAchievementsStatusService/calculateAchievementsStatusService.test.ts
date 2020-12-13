import { calculateAchievementsStatus } from "./calculateAchievementsStatusService";
import { Achievement } from "../../interfaces/achievement.interface";
import { Status } from "../../interfaces/status.interface";
import { ItemState } from "../../constants/itemState";

describe('calculateAchievementsStatus state', () => {
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
    const updatedDate = new Date('2020-12-01T00:00:00.000Z');
    const tasksStatus: Status = {
        state: ItemState.Pending,
        updated: updatedDate
        ,
    };
    const achievementsStatus = calculateAchievementsStatus(achievementList, tasksStatus);

    test('should return achievementsStatus', () => {
        achievementsStatus.forEach(()=>{
            expect(tasksStatus.state).toBe(ItemState.Pending);
        });
    });

    test('should return achievementsStatus updated date', () => {

        achievementsStatus.forEach(()=>{
            expect(tasksStatus.updated).toBe(updatedDate);
        });
    });
});