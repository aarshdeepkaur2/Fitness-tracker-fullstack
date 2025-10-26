import { progressRepository } from "../apis/progressRepo";
import type { ProgressItem } from "../data/progressData";

export class ProgressService {
  getAllProgress(): ProgressItem[] {

    return progressRepository.getAll();
  }

  addNewGoal(goal: string): void {

    const newItem: ProgressItem = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      goal,
      status: "Not Started"
    };
    progressRepository.add(newItem);
  }

  //  change goal status (Not Started / In Progress / Completed)

  changeStatus(id: number, status: string): void {
    progressRepository.update(id, status);
  }

  removeGoal(id: number): void {
    progressRepository.remove(id);
  }
}

export const progressService = new ProgressService();
