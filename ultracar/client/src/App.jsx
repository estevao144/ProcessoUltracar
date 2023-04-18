import React from 'react'
import { Navbar, Footer } from './components'
import { Login, Home, Registro, Veiculos } from './pages'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.scss';


function App() {

  const Layout = () => {
    return (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/registro",
          element: <Registro />,
        },
        {
          path: '/veiculos',
          element: <Veiculos />
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;