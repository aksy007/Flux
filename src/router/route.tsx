import React from "react";
import { Loader } from "../components/Loader";
import About from "../components/About";
import { NotFound } from "../components/404";
import LandingPage from "../pages/Landing/Landing";
import Project from "../pages/Project/Project";

const routeComponentMapping: { [key: string]: React.ComponentType } = {
  "/": LandingPage,
  "/project": Project,
  "/*": Loader
};

// Function to render the component based on the pathname
export const renderComponent = (pathname: string): React.ReactElement => {
  try {
    const pageUrl = pathname?.split('/');
    const formatedPathname = pageUrl?.[0] === '' ? `/${pageUrl[1]}` :  pathname;
    const Component = routeComponentMapping?.[formatedPathname] || null;
    return Component ? <Component /> : <Loader />;
  } catch (error) {
      return <NotFound />;
  }
};

export default renderComponent;
