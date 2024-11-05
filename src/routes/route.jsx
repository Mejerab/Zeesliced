import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Page/Login";
import Home from "../Page/Home";
import AddVideo from "../Page/AddVideo";
import EditPost from "../Page/EditPost";
import PrivateRoute from "./PrivateRoute";
import EditCreators from "../Page/EditCreators";
import EditMyVideo from "../Page/EditMyVideo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/admin-login',
          element: <Login />
        },
        {
          path: '/add-post',
          element: <PrivateRoute><AddVideo /></PrivateRoute>
        },
        {
          path: '/edit-post/:id',
          element: <PrivateRoute><EditPost /></PrivateRoute>
        },
        {
          path: '/edit-creators/:id',
          element: <PrivateRoute><EditCreators /></PrivateRoute>
        },
        {
          path: '/edit-my-video/:id',
          element: <PrivateRoute><EditMyVideo /></PrivateRoute>
        }
      ]
    },
]);
export default router;