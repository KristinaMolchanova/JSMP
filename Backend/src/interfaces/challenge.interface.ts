import { ChallengeState } from "./../constants/ChallengeState";
import { Task } from "./task.interface";
import { Status } from "./Status.interface";
import { ActualAchievement } from './actualAchievement.interface';
import { ArchiveItem } from './archiveItem.interface';

export interface Challenge {
    id: number;
    state: ChallengeState;
    startDate: Date;
    tasksOrder: Task[];
    tasksStatus: Status;
    achievementsStatus: Status;
    achievements?: ActualAchievement[];
    tasksArchive?: ArchiveItem[];
}