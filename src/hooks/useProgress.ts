import { useState, useEffect } from "react";
import type { ProgressItem } from "../Components/mockdata/progressData";
import { progressService } from "../services/progressService";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressItem[]>([]);

  const loadProgress = async () => {
    const data = await progressService.getAllProgress();
    setProgress(data);
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const addGoal = async (goal: string) => {
    await progressService.addNewGoal(goal);
    await loadProgress();
  };

  const markNotStarted = async (id: number) => {
    await progressService.changeStatus(id, "NOT_STARTED");
    await loadProgress();
  };

  const markInProgress = async (id: number) => {
    await progressService.changeStatus(id, "IN_PROGRESS");
    await loadProgress();
  };

  const markCompleted = async (id: number) => {
    await progressService.changeStatus(id, "COMPLETED");
    await loadProgress();
  };

  const removeGoal = async (id: number) => {
    await progressService.removeGoal(id);
    await loadProgress();
  };

  return {
    progress,
    addGoal,
    markNotStarted,
    markInProgress,
    markCompleted,
    removeGoal,
  };
}
