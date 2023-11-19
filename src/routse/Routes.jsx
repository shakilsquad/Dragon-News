import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Register from "../pages/Ragister/Register";
import News from "../pages/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path:'/news/:id',
        element:<PrivateRoute>
          <News></News>
          </PrivateRoute>

      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/career',
        element:<Career></Career>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);
export default router;