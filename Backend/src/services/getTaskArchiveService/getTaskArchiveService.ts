import {ArchiveItem} from "../../interfaces/archiveItem.interface";
import {Challenge} from "../../interfaces/challenge.interface";

export function getTaskArchive(challengeId: number, challenges: Challenge[]): ArchiveItem[] | undefined{
    const challenge = challenges.find(challenge => challenge.id === challengeId)!;
    if (!challenge) {
        return;
    }
    return challenge.tasksArchive;
};