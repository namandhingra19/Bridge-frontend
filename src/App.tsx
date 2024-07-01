import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import "./index.css";
import { BlockChainLandingPage } from "./pages/BlockChainLandingPage";
import { TokensPage } from "./pages/TokensPage";

require("dotenv").config();

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/bridge",
        element: <BlockChainLandingPage />,
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
