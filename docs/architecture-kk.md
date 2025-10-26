#  Fitness Tracker — Architecture Overview (Kiranjeet Kaur)

##  Repository: `ProgressRepository`
File: `src/apis/progressRepo.ts`

### What it does
Manages all progress item CRUD (Create, Read, Update, Delete) activities.  
It serves as the only source of truth for goal tracking data and communicates directly with the in-memory test data (`progressData.ts`).

### Why this logic belongs here
The repository layer does not handle business or presentation logic; it is only in charge of data access. By keeping it separate, we can quickly swap out the test data for an actual database or API in subsequent sprints without having to modify other aspects of the application.

### Where it is used
Before being sent to the user interface, progress data is updated and retrieved by the `ProgressService` class.


##  Service: `ProgressService`
File: `src/services/progressService.ts`

### What it does
outlines business logic for fitness goal management, including how to add new goals, modify their status, and remove existing ones.

### Why this logic belongs here
Business logic belongs in the service layer so the UI and data layers stay independent.  
It helps ensure that future rule changes (e.g., automatic goal reminders) can be implemented here without touching UI code.

### Where it is used
All goal-related operations are carried out by calling the `ProgressService` inside the `useProgress` hook.


##  Hook: `useProgress`
File: `src/hooks/useProgress.ts`

### What it does
Gives React components reusable presentation logic. Maintains track of all goals' statuses and uses `progressService` to coordinate UI changes with data operations.

### Why this logic belongs here
React components can remain tidy and render-focused thanks to hooks. In order for it to be reused across other components if necessary, this hook encapsulates all state management (add, update, remove, and refresh).

### Where it is used
Used in `ProgressTracker.tsx` to manage and display user progress interactively.

## Component: `ProgressTracker`
File: `src/components/progresstracker/ProgressTracker.tsx`

### What it does
offers the user interface for maintaining and showing fitness objectives. In addition to removing existing goals, users can designate them as Not Started, In Progress, or Completed.

### How it uses the architecture
- Fetches and manages state through `useProgress` hook.  
- The hook calls `ProgressService`, which then calls `ProgressRepository`.  
- This creates a clear **three-layer architecture** separating presentation, business logic, and data access.


##  Summary
Clarity, testability, and scalability are all enhanced by this Sprint 3 rewrite.  
The project is ready for Sprint 4, when the test dataset will be replaced with data persistence and backend integration thanks to the hook-service-repository structure.
