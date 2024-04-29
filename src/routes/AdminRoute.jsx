import AdminDashboard from "../Admin/components/AdminDashboard/AdminDashboard";
import AdminLayout from "../components/layouts/admin/AdminLayout";

export const AdminRoute = {
  path: "/admindashboard",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <AdminDashboard />,
    },
  ],
};
