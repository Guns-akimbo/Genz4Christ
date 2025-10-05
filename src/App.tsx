import { createHashRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/landingpage";
import AboutUs from "./pages/aboutUs";
import GetInvolved from "./pages/getInvolved";
import Gallery from "./pages/gallery";
import Story from "./pages/story";
import ContactUs from "./pages/contactUs";

const App = () => {
  const route = createHashRouter([
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
    { 
      path: "/contactus", 
      element: <ContactUs /> 
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
