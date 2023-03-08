import { AdminLogin, AdminOutlet, Dashboard } from "pages/administration"
import { LocationForm, OccupantsForm, UsersOutlet, PersonalForm, Invitation, SuccessfulRegistration } from "pages/users"
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
        {
            path: "/administration", element: <AdminOutlet />, children: [
                { path: "", element: <AdminLogin /> },
                { path: "dashboard", element: <Dashboard /> },
            ]
        },
        { path: "*", element: <NotFound /> }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes