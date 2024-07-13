import React from "react";
import { Loader } from "../component/loader";
import { Home } from "../component/home";
import About from "../component/about";
import { NotFound } from "../component/404";

const routeComponentMapping: { [key: string]: React.ComponentType } = {
  "/": Loader,
  "/home": Home,
  "/about": About,
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
