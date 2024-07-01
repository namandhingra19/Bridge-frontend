import { HomePage } from "../components/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import { Bridge } from "./Bridge";

export function Main() {
  return (
    <div>
      <Navbar />
      <div className="ml-16 md:ml-64">
        {/* Content area where other components and pages will be rendered */}
        <Header />
        {/* Add more routes here if needed */}
        {/* Other components and pages */}
      </div>
    </div>
  );
}
