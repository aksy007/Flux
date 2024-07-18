// Page To create, select Projects
import React from "react";
import { LandingPageProps, useLandingPageData } from "./LandingData";
import NoProjectAccess from "./partials/NoProjectAccess/NoProjectAccess";
import ProjectCards from "./partials/ProjectCards/ProjectCards";


const LandingPage: React.FC<LandingPageProps> = () => {
    const { userAuthorisedProjects, hasProjectAccess } = useLandingPageData();
    return ( 
        !hasProjectAccess 
        ? <ProjectCards userAuthorisedProjects={userAuthorisedProjects} />
        : <NoProjectAccess /> 
    );
};

export default LandingPage;
