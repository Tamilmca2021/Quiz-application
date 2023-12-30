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
import Login from "./Pages/Login";
import User from "./Pages/Users/user";
import Courses from "./Pages/Test/test";
import Results from "./Pages/Result/result";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />}>
        <Route index element={<div>dashboard</div>} />
        <Route path="users" element={<User />} />
        <Route path="courses" element={<Courses />}>
          <Route path="questions" element={<div>Course questions</div>} />
        </Route>
        <Route path="results" element={<Results />} />
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
