import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Blog from './pages/Blog.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AdminLayout from "./admin/layouts/AdminLayout.jsx";
import AdminDashboard from "./admin/pages/Dashboard.jsx";
import AdminProducts from "./admin/pages/Products.jsx";
import AdminOrders from "./admin/pages/Orders.jsx";
import AdminCustomers from "./admin/pages/Customers.jsx";
import AdminBlog from "./admin/pages/AdminBlog.jsx";
import AdminSettings from "./admin/pages/Settings.jsx";
const router = createBrowserRouter([
  {
    element: <MainLayout />,  
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/Blog", element: <Blog /> },
      { path: "/Contact", element: <ContactUs /> },
    ],
  },



  // 🔐 ADMIN ROUTES
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "products", element: <AdminProducts /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "customers", element: <AdminCustomers /> },
      { path: "blog", element: <AdminBlog /> },
      { path: "settings", element: <AdminSettings /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
