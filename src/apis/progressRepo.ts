import type { ProgressItem } from "../data/progressData";
import { progressData } from "../data/progressData"


export class ProgressRepository {
  private item = [...progressData];

  getAll(): ProgressItem[] {
    return this.item;
  }

  add(item: ProgressItem): void {
    this.item.push(item);
  }

  update(id: number, newStatus: string): void {
    const found = this.item.find(i => i.id === id);
    if (found) {
      found.status = newStatus;
  }
} 

  remove(id: number): void {
    this.item = this.item.filter(i => i.id !== id);
  }
}

export const progressRepository = new ProgressRepository();
