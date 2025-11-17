import express from "express";
import * as workoutController from "../controllers/workoutlogControllers";
import { validateRequest } from "../middleware/validate";
import { workoutSchema } from "../validations/workoutlogValidation";

const router = express.Router();

/**
 * @swagger
 * /workouts:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: List of all workouts
 */
router.get("/workouts", workoutController.getAllWorkouts);

/**
 * @swagger
 * /workouts/{id}:
 *   get:
 *     summary: Get a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the workout 
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workout retrieved successfully
 *       404:
 *         description: Workout not found
 */
router.get("/workouts/:id", workoutController.getWorkoutById);

/**
 * @swagger
 * /workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - exercise
 *               - reps
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2025-11-11"
 *               exercise:
 *                 type: string
 *                 example: "Push-ups"
 *               reps:
 *                 type: string
 *                 example: "3 sets of 15"
 *               favorite:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Workout created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/workouts", validateRequest(workoutSchema), workoutController.createWorkout);

/**
 * @swagger
 * /workouts/{id}:
 *   put:
 *     summary: Update a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the workout to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2025-11-12"
 *               exercise:
 *                 type: string
 *                 example: "Squats"
 *               reps:
 *                 type: string
 *                 example: "4 sets of 20"
 *               favorite:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 */
router.put("/workouts/:id", validateRequest(workoutSchema), workoutController.updateWorkout);

/**
 * @swagger
 * /workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the workout to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workout deleted successfully
 *       404:
 *         description: Workout not found
 */
router.delete("/workouts/:id", workoutController.deleteWorkout);

/**
 * @swagger
 * /workouts/{id}/favorite:
 *   patch:
 *     summary: Toggle favorite status for a workout
 *     tags: [Workouts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Favorite status toggled
 *       404:
 *         description: Workout not found
 */
router.patch("/workouts/:id/favorite", workoutController.toggleFavoriteWorkout);


export default router;
