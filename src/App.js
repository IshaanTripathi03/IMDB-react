import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/watch",
    element: (
      <WatchList />
    ),
  },
]);

export default function App() {

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}
