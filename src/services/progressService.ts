import { progressRepository } from "../apis/progressRepo";
import type { ProgressItem } from "../Components/mockdata/progressData";

export class ProgressService {

  async getAllProgress(): Promise<ProgressItem[]> {
    return await progressRepository.getAll();
  }

  async addNewGoal(goal: string): Promise<void> {
    await progressRepository.add(goal);
  }

  async changeStatus(id: number, status: string): Promise<void> {
    await progressRepository.update(id, status);
  }

  async removeGoal(id: number): Promise<void> {
    await progressRepository.remove(id);
  }
}

export const progressService = new ProgressService();
