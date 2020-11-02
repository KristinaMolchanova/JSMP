import { ActualTask, ActualAchievement, Challenge } from './Model';

export interface AchievementService {
  getCurrentTask(challengeId: number): ActualTask;
  getAchievements(challengeId: number): Array<ActualAchievement>;
  getTaskArchive(challengeId: number): Array<ActualTask>;
  startNewChallenge(
    taskList: Array<ActualTask>,
    challengeList: Array<Challenge>,
    challengeDuration: 30,
    achievementNumber: 6
  ): Challenge;
  calculateAchievementsStatus(
    achievementList: ActualAchievement[],
    taskStatus: ActualTask['status']
  ): ActualAchievement['status'];
}
