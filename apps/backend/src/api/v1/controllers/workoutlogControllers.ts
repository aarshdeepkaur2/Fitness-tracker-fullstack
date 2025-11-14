import { Request, Response, NextFunction } from "express";
import { WorkoutLog } from "@prisma/client";
import * as workoutService from "../services/workoutlogServices";
import { successResponse } from "../models/responsemodel";

export const getAllWorkouts = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const workouts = await workoutService.fetchAllWorkouts();
    res
      .status(200)
      .json(successResponse(workouts, "Workouts has retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const getWorkoutById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const workoutId = req.params.id;
    const workout: WorkoutLog | null = await workoutService.getWorkoutById(workoutId);

    if (workout) {
      res
        .status(200)
        .json(successResponse(workout, "Workout has been retrieved successfully"));
    } else {
      throw new Error("Workout cannot be found");
    }
  } catch (error) {
    next(error);
  }
};

export const createWorkout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newWorkout = await workoutService.createWorkout(req.body);
    res
      .status(201)
      .json(successResponse(newWorkout, "Workout has been created successfully"));
  } catch (error) {
    next(error);
  }
};

export const updateWorkout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const workoutId = req.params.id;
    const updatedWorkout = await workoutService.updateWorkout(workoutId, req.body);
    res
      .status(200)
      .json(successResponse(updatedWorkout, "Workout has been updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const deleteWorkout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const workoutId = req.params.id;
    await workoutService.deleteWorkout(workoutId);
    res.status(200).json(successResponse(null, "Workout has been deleted successfully"));
  } catch (error) {
    next(error);
  }
};


