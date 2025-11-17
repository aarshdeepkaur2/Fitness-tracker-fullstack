import prisma from "../../../../prisma/client";

export default {
  getMeals: async () => {
    return await prisma.meal.findMany({ orderBy: { calories: "desc" } });
  },

  addMeal: async (meal: { name: string; calories: number }) => {
    return await prisma.meal.create({ data: meal });
  },

  deleteMeal: async (id: number) => {
    return await prisma.meal.delete({ where: { id } });
  },
};
