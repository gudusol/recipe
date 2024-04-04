import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  mainRoutes,
  lemonRoutes,
  greenRoutes,
  hallaRoutes,
} from "./routes/index.js";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    ...mainRoutes,
    ...lemonRoutes,
    ...greenRoutes,
    ...hallaRoutes,
  ]);
  return <RouterProvider basename={process.env.PUBLIC_URL} router={router} />;
}

export default App;
