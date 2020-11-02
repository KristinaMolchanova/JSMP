export interface Task {
  id: number;
  description: string;
}

export interface Achievement {
  id: number;
  description: string;
  image: string;
  checkComplete: boolean;
}

export interface Status {
  state: ItemState;
  updated: Date;
}

export enum ItemState {
  Pending = 1,
  Success = 2,
  Failure = 3
}

export interface Challenge {
  id: number;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Array<string>;
  tasksStatus: ActualTask['status'];
  achievementsStatus: ArchiveItem['status'];
}

export enum ChallengeState {
  InProgress = 'In Progress',
  Success = 'Success',
  Failure = 'Failure'
}

export interface ArchiveItem extends Task {
  status: Status['state'];
}

export interface ActualTask extends Task {
  status: Status['state'];
}

export interface ActualAchievement extends Achievement {
  status: Status['state'];
}
