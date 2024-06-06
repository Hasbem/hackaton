import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Activity from "./pages/Activity.jsx"
import Homepage from "./pages/Homepage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
        index: true,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "activities/:id",
        element: <Activity />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
