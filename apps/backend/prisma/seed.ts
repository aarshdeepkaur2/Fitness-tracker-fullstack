import { PrismaClient } from "../generated/prisma/client";
import { workoutSeedData } from "./seedData";

const prisma = new PrismaClient();

async function main() {
  // Clearing any old data
  await prisma.workoutLog.deleteMany();

  // Inserting new data
  const createdWorkouts = await prisma.workoutLog.createManyAndReturn({
    data: workoutSeedData,
    skipDuplicates: true,
  });

  console.log(`Created ${createdWorkouts.length} workouts sucessfully!!!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
