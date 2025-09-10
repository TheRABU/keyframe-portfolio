import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    path: "/",
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
