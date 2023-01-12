import Members from "../Dashboard/Members";
import Tasks from "../Dashboard/Tasks";

export const PrivateRoutes = [
  { path: "/tasks", name: "tasks", Component: Tasks },
  { path: "/members", name: "members", Component: Members },
];
