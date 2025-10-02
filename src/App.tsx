import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/landingpage";
import AboutUs from "./pages/aboutUs";
import GetInvolved from "./pages/getInvolved";
import Gallery from "./pages/gallery";
import Story from "./pages/story";

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
    {
      path: "/getinvolved",
      element: <GetInvolved />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/story",
      element: <Story />,
    },
    
  ]);
  return <RouterProvider router={route} />;
};

export default App;
