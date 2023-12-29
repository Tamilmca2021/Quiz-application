import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<h3>login</h3>} />
      <Route path="home" element={<Home />}>
        <Route index element={<div>dashboard</div>} />
        <Route path="users" element={<div>alluser</div>} />
        <Route path="courses" element={<div>test</div>}>
          <Route path="questions" element={<div>Course questions</div>} />
        </Route>
        <Route path="results" element={<div>result</div>} />
        <Route path="reassign" element={<div>reassign</div>} />
      </Route>
      <Route path="/user" element={<div>users</div>}>
        <Route path="instructions" element={<div>instructions</div>} />
        <Route path="test" element={<div>test</div>} />
        <Route path="completed" element={<div>test completed page</div>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
