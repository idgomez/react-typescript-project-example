export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const tasks: Task[] = [
  { id: 1, title: "Set up a new React project", completed: false },
  { id: 2, title: "Learn about React hooks", completed: true },
  { id: 3, title: "Build a to-do list app", completed: false },
  { id: 4, title: "Optimize component rendering", completed: true },
  { id: 5, title: "Study useEffect lifecycle", completed: false },
  { id: 6, title: "Implement context for state management", completed: true },
  { id: 7, title: "Debug a React app using React DevTools", completed: false },
  { id: 8, title: "Practice writing unit tests with Jest", completed: false },
  { id: 9, title: "Create a responsive navbar", completed: true },
  { id: 10, title: "Explore Redux Toolkit", completed: false },
  { id: 11, title: "Integrate an API using Axios", completed: false },
  { id: 12, title: "Refactor a large React component", completed: true },
  { id: 13, title: "Write a custom hook", completed: false },
  { id: 14, title: "Learn about React Server Components", completed: true },
  { id: 15, title: "Create a dark mode toggle", completed: false },
  { id: 16, title: "Implement routing with React Router", completed: true },
  { id: 17, title: "Set up ESLint and Prettier", completed: false },
  { id: 18, title: "Add animations using Framer Motion", completed: false },
  {
    id: 19,
    title: "Configure a CI/CD pipeline for a React app",
    completed: true,
  },
  { id: 20, title: "Create a portfolio website with React", completed: false },
  { id: 21, title: "Fix a bug in the component state logic", completed: true },
  { id: 22, title: "Implement lazy loading for images", completed: false },
  {
    id: 23,
    title: "Explore Next.js for server-side rendering",
    completed: false,
  },
  {
    id: 24,
    title: "Prepare a presentation on React best practices",
    completed: true,
  },
  {
    id: 25,
    title: "Practice solving React coding challenges",
    completed: false,
  },
];
