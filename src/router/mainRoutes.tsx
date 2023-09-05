import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/HomeScreen";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
            index:true,
            element:<HomeScreen />
        }
    ]
  },
]);