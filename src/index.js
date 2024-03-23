import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import CourseScreen from "./screens/CourseScreen.jsx";
import CourseDetailsScreen from "./screens/CourseDetailsScreen.jsx";
import Forum from "./Screen/forum";
import Home from "./Screen/Home";
import CourseVideoScreen from "./screens/CourseVideoScreen.jsx";
import CourseShorts from "./screens/CourseShortsScreen.jsx";
import Course from "./Screen/course.jsx";
import ForumAccount from "./Screen/accountDashboard.jsx";
import FundRaising from "./Screen/fundRaising.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<App />}>
        <Route path="/" index={true} element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetailsScreen />} />
        <Route path="/course/:id/video" element={<CourseVideoScreen />} />
        <Route path="/course/:id/shorts" element={<CourseShorts />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/dashboard" element={<ForumAccount />} />
        <Route path="/funding" element={<FundRaising />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
