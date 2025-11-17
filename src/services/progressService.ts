import type { ProgressItem } from "../Components/mockdata/progressData";

const API = "http://localhost:3000/progress";

export class ProgressService {
  async getAllProgress(): Promise<ProgressItem[]> {
    const response = await fetch(API);
    return await response.json();
  }

  async addNewGoal(goal: string): Promise<void> {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal })
    });
  }

  async changeStatus(id: number, status: string): Promise<void> {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
  }

  async removeGoal(id: number): Promise<void> {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  }
}

export const progressService = new ProgressService();
