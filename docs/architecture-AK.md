# Architecture Document – ARshdeep Kaur

# 1. WorkoutLog Component

## Hook (UserWorkout)/ Services(WorkoutService) and Repository( workoutRepo)

### What does this hook/service/repository do?
-  The useworkout manages all the workout related data which includes add, update, remove, toggle and search and filtering options. It also manages the working of success and error meassages.

- WorkoutServices is responsible for all the actions related to workout which include fetching, adding, updating or deleting.. It takes the data from the repo file and then return the result to hooks. Also, It handles the validation. 

- The Workoutrepo includes basic CRUD operations.It is responsible for adding an database in the future.


### How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- I have included all the workout related data and actions inside the hook. I kept it very simple only for showing the data. It separates the logic in the hook from my main component.

- The sevices contain  business logic. It set up rules how workout data should used or changed. I can easily update data rules without changing the main component.

- The repo focus on where the data comes from and how it is saved. It keeps everything separte and jut temporary storage for data.

### Where is this implementation made use of in the project and how?

- The WorkoutLog component makes use of it.
The hook gives the component all of its data and features, including addWorkout, removeWorkout, and toggleFavorite.

-  It is used for performing out tasks like retrieving and updating workout data inside the useWorkouts hook.

- REpository's basic CRUD operations are used inside the WorkoutService to and save the information of the workout.
