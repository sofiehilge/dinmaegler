import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import PropertyList from "./pages/PropertyList.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import Agents from "./pages/Agents.jsx";
import AgentsDetails from "./pages/AgentsDetails.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/propertylist" element={<PropertyList />} />
      <Route path="/propertydetails" element={<PropertyDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/agentsdetails" element={<AgentsDetails />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
