import { useEffect, useState } from "react";
import { RootState } from "@reduxjs/toolkit/query";
import { MockProjectsList } from "./LandingPageMockData";
import { useDispatch, useSelector } from "react-redux";
import { addProjectList } from "../../redux/actions";

// interface
export interface ProjectList {
  id: number;
  name: string;
  description: string;
  accessLevel: string;
  owner: string;
  lastUpdatedAt: string;
}
export interface LandingPageProps {}
export interface NoProjectAccessProps {}
export interface ProjectCardsProps {
  userAuthorisedProjects: ProjectList[];
}
export interface ProjectCardProps {
  key: number;
  project: ProjectList;
}

// custom hooks
const useLandingPageData = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.AppReducer.projects);
  const [userAuthorisedProjects, setUserAuthorisedProjects] = useState<
    ProjectList[]
  >([]);
  const [hasProjectAccess, setHasProjectAccess] = useState<boolean>(false);

  useEffect(() => {
    // Fetch Projects which user has access to
    // TODO: Update this to set data from api

    if (MockProjectsList?.length > 0) {
      setUserAuthorisedProjects(MockProjectsList);
      setHasProjectAccess(true);
      dispatch(addProjectList(MockProjectsList));
    } else {
      dispatch(addProjectList([]));
      setUserAuthorisedProjects([]);
      setHasProjectAccess(false);
    }
  }, []);

  useEffect(() => {
    setUserAuthorisedProjects(projects);
  }, [projects]);

  return { userAuthorisedProjects, hasProjectAccess };
};

export { useLandingPageData };
