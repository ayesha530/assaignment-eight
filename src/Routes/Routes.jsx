import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { TbBrandYoutubeKids } from "react-icons/tb";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/App/Apps";
import AppDetailsPage from "../Compoments/AppDetailsPage/AppDetailsPage";
import Install from "../Pages/InstallPage/Install";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/apps.json').then(res => res.json()),
        Component: Home

      },
      {
        path: '/apps',
        loader: () => fetch('/allAps.json').then(res => res.json()),
        Component: Apps
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/allAps.json').then(res => res.json()),
        Component: AppDetailsPage
      },
      {
        path:'/install',
        loader: () => fetch("/apps.json").then(res => res.json()),
        Component: Install,
      }
    ]
  },
]);
