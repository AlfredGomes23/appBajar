import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";
import AppDetails from "../pages/AppDetails";

const Routes = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        errorElement: NotFound,
        children:[
            {index: true, Component: Home},
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installation',
                Component: Installation
            },
            {
                path: 'app/:id',
                Component: AppDetails
            }
        ]
    }
]);

export default Routes;