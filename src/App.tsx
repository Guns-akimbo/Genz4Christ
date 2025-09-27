import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/landingpage";
import AboutUs from "./pages/aboutUs";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
