import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const options = {
  method: "POST",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// const fetchData = () =>{
//     return fetch(`http://localhost:3001/domainkeyword/${params.userName}`,options)
//         .then(res=> res.json())
//         .then(data => data)
//         .catch(error => console.log(error.message))
// }

const router = createBrowserRouter([
  {
    path: "/:userName",
    element: <App />,
    loader: async ({ params }) => {
      return fetch(
        `http://localhost:3001/domainkeyword/${params.userName}`,
        options
      );
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
