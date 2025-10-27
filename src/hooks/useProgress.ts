import { useState } from "react";
import type  { ProgressItem } from "../Components/mockdata/progressData";
import { progressService } from "../services/progressService";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressItem[]>(progressService.getAllProgress());


  const refreshList = () => setProgress([...progressService.getAllProgress()]);


  const addGoal = (goal: string) => {
    progressService.addNewGoal(goal);
    refreshList();
  };

  const markNotStarted = (id: number) => {
    progressService.changeStatus(id, "Not Started");
    refreshList();
  };

  const markInProgress = (id: number) => {
    progressService.changeStatus(id, "In Progress");
    refreshList();
  };

  const markCompleted = (id: number) => {
    progressService.changeStatus(id, "Completed");
    refreshList();
  };

  const removeGoal = (id: number) => {
    progressService.removeGoal(id);
    refreshList();
  };

  return { progress, addGoal, markNotStarted, markInProgress, markCompleted, removeGoal };
}
