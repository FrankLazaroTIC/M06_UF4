import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>,
      <Route index element={<Home />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App({routes}) {
  return (
    <RouterProvider router={router} />
  );
}

export default App;