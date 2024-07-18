import React from "react";
import { Loader } from "../components/Loader";
import About from "../components/About";
import { NotFound } from "../components/404";
import LandingPage from "../pages/Landing/Landing";

const routeComponentMapping: { [key: string]: React.ComponentType } = {
  "/": LandingPage,
  "/about": About,
  "/*": Loader
};

// Function to render the component based on the pathname
export const renderComponent = (pathname: string): React.ReactElement => {
  try {
    const Component = routeComponentMapping?.[pathname] || null;
    return Component ? <Component /> : <Loader />;
  } catch (error) {
    console.log("err: ", error);
    return <NotFound />;
  }
};

export default renderComponent;
