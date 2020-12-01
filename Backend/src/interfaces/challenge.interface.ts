import { ChallengeState } from "./../constants/ChallengeState";
import { ActualTask } from "./actualTask.interface";
import { ArchiveItem } from "./archiveItem.interface";

export interface Challenge {
    id: number;
    state: ChallengeState;
    startDate: Date;
    tasksOrder: Array<string>;
    tasksStatus: ActualTask['status'];
    achievementsStatus: ArchiveItem['status'];
}