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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
