import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Builder from './pages/Builder.tsx';
import Home from './pages/Home.tsx';
import DashbordP from './pages/DashbordP.tsx';
import LoginSetIsOpen from './pages/LoginSetIsOpen.tsx';
import RegisterSetOpen from './pages/RegisterSetOpen.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element:<LoginSetIsOpen/> ,
  },
  {
    path: "/register",
    element:<RegisterSetOpen/> ,
  },
  {
    path: "/DashBord",
    element:<DashbordP/> ,
  },
  {
    path: "/Builder",
    element:<Builder/> ,
  },
  
]);


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}> 
    <RouterProvider router={router} />
    </QueryClientProvider>
     <App/>
  </StrictMode>,
)
