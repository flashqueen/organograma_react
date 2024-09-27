import './App.css';
import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import SRE from './pages/sres/Sre';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/superintendencias" element={<SRE />} />
      </>
  )
);

function App() {
  const pageTitle = "Organograma - SEDUC";

  React.useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
