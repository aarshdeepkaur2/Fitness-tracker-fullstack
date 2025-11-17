import Joi, { ObjectSchema } from "joi";

export const workoutSchema: ObjectSchema = Joi.object({
    date: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .required()
        .messages({
            "any.required": "Date is required",
            "string.empty": "Date cannot be empty",
            "string.pattern.base": "Date must be in YYYY-MM-DD format"
        }),

    exercise: Joi.string()
        .min(3)
        .required()
        .messages({
            "any.required": "Exercise name is required",
            "string.empty": "Exercise name cannot be empty",
            "string.min": "Exercise name must be at least 3 characters long",
    
        }),

    reps: Joi.string()
        .pattern(/\d+/)
        .required()
        .messages({
            "any.required": "Repetitions detail is required",
            "string.empty": "Repetitionsa cannot be empty",
            "string.pattern.base": "Repetitions must include a numeric value (e.g., '3 sets of 10')"
        }),

    favorite: Joi.boolean().optional(),

    id: Joi.string().optional()
});
