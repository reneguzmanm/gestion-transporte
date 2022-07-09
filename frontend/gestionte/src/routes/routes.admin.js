import { AdminLayout } from "../layouts";
import { HomeAdmin, UsersAdmin, GradesAdmin, StudentAdmin, AttendanceAdmin } from "../pages/Admin";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true,
    },
    {
        path: "/admin/grades",
        layout: AdminLayout,
        component: GradesAdmin,
        exact: true,
    },
    {
        path: "/admin/students",
        layout: AdminLayout,
        component: StudentAdmin,
        exact: true,
    },
    {
        path: "/admin/attendance",
        layout: AdminLayout,
        component: AttendanceAdmin,
        exact: true,
    },

];

export default routesAdmin;