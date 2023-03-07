import { LocationForm, OccupantsForm, PersonalForm, Invitation, SuccessfulRegistration } from "pages/users"
import UsersOutlet from "pages/users/UsersOutlet"
import NotFound from "pages/utils/NotFound"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

const AppRoutes = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Invitation /> },
        {
            path: "/registration", element: <UsersOutlet />, children: [
                { path: "", element: <PersonalForm /> },
                { path: "location", element: <LocationForm /> },
                { path: "occupants", element: <OccupantsForm /> },
                { path: "successful-registration", element: <SuccessfulRegistration /> }
            ]
        },
        { path: "*", element: <NotFound /> }
    ])
    return (
        <RouterProvider router={router} />
        // <Invitation />
    )
}

export default AppRoutes