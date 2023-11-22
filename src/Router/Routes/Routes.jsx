import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../pages/Home";
import PageTwo from "../../pages/PageTwo";
import PageThree from "../../pages/PageThree";
import LastPage from "../../pages/LastPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path:"/",
                element: <Home />,

            },
            {
                path:"/page-two",
                element: <PageTwo />,

            },
            {
                path:"/page-three",
                element: <PageThree />,

            },
            {
                path:"/page-four",
                element: <PageThree />,

            },
            {
                path:"/page-five",
                element: <PageThree />,

            },
            {
                path:"/page-six",
                element: <PageThree />,

            },
            {
                path:"/page-seven",
                element: <PageThree />,

            },
            {
                path:"/last-page",
                element: <LastPage />,

            }
        ]
    }
]);

export default router;