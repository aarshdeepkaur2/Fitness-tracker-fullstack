import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await seedData();
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

async function seedData() {
  // Clear tables 
  await prisma.workoutLog.deleteMany();
  await prisma.user.deleteMany();

  console.log("Cleared existing data");

  // Create 3 fake users
  const users = await Promise.all([
    prisma.user.create({
      data: { id: "user_1", name: "Arshdeep Kaur", email: "arshdeep@example.com" },
    }),
    prisma.user.create({
      data: { id: "user_2", name: "Deep Kaur", email: "deep@example.com" },
    }),
    prisma.user.create({
      data: { id: "user_3", name: "Nijjar", email: "nijjar@example.com" },
    }),
  ]);

  console.log("Created 3 users");

  // randomly assign workouts to users
  const getRandomUser = () => users[Math.floor(Math.random() * users.length)];

  // Create workout logs
  await prisma.workoutLog.createMany({
    data: [
      {
        date: new Date("2025-09-09"),
        exercise: "Push-ups",
        reps: "3 sets of 15",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-08"),
        exercise: "Squats",
        reps: "4 sets of 20",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-07"),
        exercise: "Plank",
        reps: "3 sets of 60s",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-06"),
        exercise: "Burpees",
        reps: "3 sets of 12",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-05"),
        exercise: "Lunges",
        reps: "3 sets of 10 each leg",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-04"),
        exercise: "Bicep Curls",
        reps: "4 sets of 12",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-03"),
        exercise: "Jumping Jacks",
        reps: "5 sets of 30s",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-02"),
        exercise: "Bench Press",
        reps: "3 sets of 8",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-09-01"),
        exercise: "Deadlift",
        reps: "4 sets of 6",
        favorite: false,
        userId: getRandomUser().id,
      },
      {
        date: new Date("2025-08-31"),
        exercise: "Pull-ups",
        reps: "3 sets of 10",
        favorite: false,
        userId: getRandomUser().id,
      },
    ],
  });

  console.log(" Seeded 10 workouts linked to users");
}




