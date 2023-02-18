import Invitation from "pages/users/Invitation";
import NotFound from "pages/utils/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { pageRoutes } from "utils/constants";

const Routes = () => {
    const router = createBrowserRouter([
        { path: pageRoutes.invitation.default, element: <Invitation /> },
        { path: "*", element: <NotFound /> },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes