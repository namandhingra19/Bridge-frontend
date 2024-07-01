import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Main } from "./pages/Main";
import { HomePage } from "./components/HomePage/HomePage";
import { Bridge } from "./pages/Bridge";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { TokensPage } from "./pages/TokensPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/bridge",
        element: <Bridge />,
      },
      {
        path: "/bridge/:chainId",
        element: <TokensPage />,
      },
    ].map((route) => {
      return {
        ...route,
        element: <Layout>{route.element}</Layout>,
      };
    })
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
