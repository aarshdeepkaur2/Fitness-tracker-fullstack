import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const CLERK_USER_ID = "user_36IYJ7hM3ej8iRhnu1bl668ybv4";

async function main() {

// Remove user if already exists
await prisma.user.deleteMany({
  where: { id: CLERK_USER_ID }
});
  // Create ONE real user]
  const user = await prisma.user.create({
    data: {
      id: CLERK_USER_ID,
      name: "Arshdeep",
      email: "ashnijjar47@gmail.com"
    }
  });

  console.log("Created user:", user.id);


  const workouts = await prisma.workoutLog.createManyAndReturn({
    data: [
      {
        date: new Date("2025-09-09"),
        exercise: "Push-ups",
        reps: "3 sets of 15",
        favorite: true,
        userId: user.id
      },
      {
        date: new Date("2025-09-08"),
        exercise: "Squats",
        reps: "4 sets of 20",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-07"),
        exercise: "Plank",
        reps: "3 sets of 60s",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-06"),
        exercise: "Burpees",
        reps: "3 sets of 12",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-05"),
        exercise: "Lunges",
        reps: "3 sets of 10",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-04"),
        exercise: "Bicep Curls",
        reps: "4 sets of 12",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-03"),
        exercise: "Jumping Jacks",
        reps: "5 sets of 30s",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-02"),
        exercise: "Bench Press",
        reps: "3 sets of 8",
        favorite: false,
        userId: user.id
      },
      {
        date: new Date("2025-09-01"),
        exercise: "Deadlift",
        reps: "4 sets of 6",
        favorite: false,
        userId: user.id
      },
  
    ],
    skipDuplicates: true
  });

  console.log(" Seeded workouts:", workouts.length);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
