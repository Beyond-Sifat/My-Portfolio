import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Component/Home";
import ProjectsDetails from "../Component/Projects/ProjectsDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'projectsDetails/:id',
                Component: ProjectsDetails,
            },
        ]
    },
]);