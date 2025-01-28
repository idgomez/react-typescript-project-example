# Task Management App (React + TypeScript)

## Objective
The goal is to build and enhance a task management application using React and TypeScript. This app is designed to demonstrate key concepts like state management, component reusability, and interactivity in a real-world scenario.

---

## Features Already Implemented

1. **Task List Rendering**:
   - Displays tasks from an initial dataset.
   - Each task includes a title and a completion status.

2. **Add Tasks**:
   - Includes a form for adding new tasks.
   - Ensures new tasks have a unique ID and are incomplete by default.

3. **Toggle Completion**:
   - Allows toggling the completion status of tasks by clicking on them.
   - Visual feedback for completed tasks (e.g., gradients and checkmarks).

4. **Filter Tasks**:
   - Buttons to filter tasks based on their status:
     - **All**: Displays all tasks.
     - **Completed**: Displays only completed tasks.
     - **Pending**: Displays only incomplete tasks.
   - The buttons do not have any functionality yet.

5. **Basic Styling**:
    - Interactive hover effects for buttons and tasks.
    - Differentiated background colors for completed tasks.
    - Input field and button styles for a modern look.

---

## Requirements

Start by completing the first item in each of the following groups.
Then, if you have time,  you can go for another round and pick one more item from each group.
In the rare case you have time for a third round, go for it! 

If you want you can mark the following checkboxes to keep track of your progress.

### Group 1:

[ ] Add a delete button for each task to remove it.

[ ] Implement filtering logic.

[ ] Implement a search bar to filter tasks by their title dynamically.

[ ] Persist the state so it survives a page refresh.


### Group 2:

[ ] Theming Options:. Add a light/dark mode toggle for better usability.

[ ] Mobile Responsivenes. Adapt the layout for various screen sizes, ensuring usability on phones and tablets.

[ ] Priority Levels:
  - Allow users to assign priorities to tasks (e.g., High, Medium, Low).
  - Use different visual indicators for priorities.

[ ] Accessibility. Include ARIA roles and keyboard-friendly navigation for better accessibility.


### Group 3:

[ ] Bulk Actions. Add a button to mark all tasks as completed or clear all completed tasks.

[ ] Component Decomposition. Break down the app into smaller, reusable components to manage different features (e.g., filters, search, task list).

[ ] Custom Hooks. Encapsulate logic like filtering, searching, or local storage management into reusable hooks.  

[ ] Drag-and-Drop. Enable reordering of tasks through drag-and-drop functionality.

[ ] Task Analytics. Show task statistics, such as total tasks, completed tasks, and pending tasks.

---

## **Technical Guidelines**
1. Use React's **Functional Components** and **Hooks** (`useState`, `useEffect` if necessary).  
2. Ensure strong **type safety** using TypeScript. Define interfaces or types as needed.  
3. Write modular and reusable components:
   - Example: A `TaskItem` component to render individual tasks.
4. Try to keep the code clean, readable, and maintainable. Given the time constraints, for optimizations that would take long just mention them.

---

## **How to Run the Project**
1. Clone the repository or download the project files.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm start`.
4. Open the app in your browser at [http://localhost:3000](http://localhost:3000).


You can start coding! 🚀.  No need to read the rest of the readme now.

---

## Extra notes for a possible open conversation afterwards, 

### Code Quality
- **Clarity, modularity, and maintainability**:
  - Is the code well-organized and easy to understand?
  - Are components written in a modular and reusable manner?
  - Is the code structured in a way that makes it easy to maintain and extend?
  - Are CSS styles applied effectively, keeping the app visually clean?

### TypeScript Usage
- **Use of interfaces, types, and type safety**:
  - Are TypeScript types used effectively throughout the codebase?
  - Is type safety ensured, particularly when working with props, state, and functions?
  - Are interfaces and types defined where necessary, and are they used to prevent runtime errors?

### Problem-Solving
- **Handling edge cases and implementing solutions effectively**:
  - How well does the app handle edge cases (e.g., empty inputs, filtering with no matching results)?
  - Are any errors or unexpected behaviors anticipated and handled gracefully?
  - How effectively is the app structured to handle various interactions and user inputs?

### Creativity
- **Adding enhancements and a polished user experience**:
  - Does the app go beyond the basic requirements to offer additional features?
  - Are there UI/UX improvements such as smooth animations, transitions, and mobile responsiveness?
  - Does the app include thoughtful design choices that improve the overall user experience?
  - Are any advanced features (e.g., task analytics, drag-and-drop, bulk actions) implemented to make the app more interactive?

---
## Contact Information

For further questions or collaboration, you can reach out to the following contacts:

**Marc Boreu**  [marc.boreu-tovar@capgemini.com](mailto:marc.boreu-tovar@capgemini.com)  
**José Serra**  [jose-francisco.serra-gomez@capgemini.com](mailto:jose-francisco.serra-gomez@capgemini.com)