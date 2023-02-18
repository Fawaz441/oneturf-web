import Invitation from "pages/users/Invitation";
import NotFound from "pages/utils/NotFound";
import { RouterProvider, createHashRouter } from "react-router-dom";

const Routes = () => {
    const router = createHashRouter([
        { path: "/", element: <Invitation /> },
        { path: "*", element: <NotFound /> },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes