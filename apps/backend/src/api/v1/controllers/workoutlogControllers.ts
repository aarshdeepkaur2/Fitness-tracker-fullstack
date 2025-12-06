import { Request, Response, NextFunction } from "express";
import * as workoutService from "../services/workoutlogServices";
import { successResponse } from "../models/responsemodel";

export const getAllWorkouts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workouts = await workoutService.fetchAllWorkouts(req.userId!);
    res.status(200).json(successResponse(workouts, "Workouts retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const getWorkoutById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workout = await workoutService.getWorkoutById(req.params.id, req.userId!);
    if (!workout) return res.status(404).json({ error: "Workout not found" });
    res.status(200).json(successResponse(workout, "Workout retrieved"));
  } catch (error) {
    next(error);
  }
};

export const createWorkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workout = await workoutService.createWorkout(req.userId!, req.body);
    res.status(201).json(successResponse(workout, "Workout created"));
  } catch (error) {
    next(error);
  }
};

export const updateWorkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workout = await workoutService.updateWorkout(req.params.id, req.userId!, req.body);
    res.status(200).json(successResponse(workout, "Workout updated"));
  } catch (error) {
    next(error);
  }
};

export const deleteWorkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await workoutService.deleteWorkout(req.params.id, req.userId!);
    res.status(200).json(successResponse(null, "Workout deleted"));
  } catch (error) {
    next(error);
  }
};

export const toggleFavoriteWorkout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workout = await workoutService.toggleFavoriteWorkout(req.params.id, req.userId!);
    res.status(200).json(successResponse(workout, "Favorite toggled"));
  } catch (error) {
    next(error);
  }
};
