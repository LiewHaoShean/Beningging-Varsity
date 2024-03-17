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
import Forum from './Screen/forum';
import Sidebar from './Components/ForumSideBar';
import ForumAccount from './Screen/accountDashboard';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<App />}>
        <Route path="/" index={true} element={<CourseScreen />} />
        <Route path="/course/:id" element={<CourseDetailsScreen />} />
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
