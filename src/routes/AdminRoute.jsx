import AdminDashboard from "../Admin/components/AdminDashboard/AdminDashboard";
import AdminLogin from "../Admin/components/AdminLogin/AdminLogin";
import AdminLayout from "../components/layouts/admin/AdminLayout";

export const AdminRoute = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <AdminLogin />,
    },
    {
      path: "dashboard",
      element: <AdminDashboard />,
    },
  ],
};
