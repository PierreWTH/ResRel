import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "@pages/LoginPage/LoginPage";
import HomePage from "@pages/HomePage";
import RegisterPage from "@pages/RegisterPage/RegisterPage";
import ProtectedRoutes from "./ProtectedRoute";
import PostsPage from "@pages/PostsPage";
import CreatePostPage from "@pages/CreatePostPage";
import PostDetailPage from "@pages/PostDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: (
          <ProtectedRoutes>
            <PostsPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/createpost",
        element: (
          <ProtectedRoutes>
            <CreatePostPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/post/:id",
        element: (
          <ProtectedRoutes>
            <PostDetailPage />
          </ProtectedRoutes>
        ),
      },

      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
