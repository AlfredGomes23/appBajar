import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";
import AppDetails from "../pages/AppDetails";
import Loading from "../components/Loading";
import { Suspense } from "react";

const allAppsPromise = fetch('/Data.json').then(res => res.json());

const Routes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: NotFound,
        children: [
            { index: true, Component: Home },
            {
                path: 'apps',
                element: <Suspense fallback={<Loading />}>
                    <Apps allAppsPromise={allAppsPromise} />
                </Suspense>
            },
            {
                path: 'installation',
                element: <Suspense fallback={<Loading />}>
                    <Installation allAppsPromise={allAppsPromise} />
                </Suspense>
            },
            {
                path: 'app/:id',
                element: <Suspense fallback={<Loading />}>
                    <AppDetails allAppsPromise={allAppsPromise} />
                </Suspense>
            }
        ]
    }
]);

export default Routes;