import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage/LoginPage";
import HomePage from "../Pages/HomePage/HomePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoutes from "./ProtectedRoute";
import PostsPage from "../Pages/PostsPage/PostsPage";
import CreatePostPage from "../Pages/CreatePostPage/CreatePostPage";
import PostDetailPage from "../Pages/PostDetailPage/PostDetailPage";

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
