import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Component/Home";
import ProjectsDetails from "../Component/Projects/ProjectsDetails";
import Error from "../Page/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error></Error>,
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