import { ProjectList } from "../pages/Landing/LandingData";

export const addProjectList = (projects: ProjectList[]) => ({
  type: "ADD_PROJECT_LIST",
  payload: projects,
});

export const addProject = (projectData: ProjectList) => ({
  type: "ADD_PROJECT",
  payload: projectData,
});

export const updateProject = (projectData: ProjectList) => ({
  type: "UPDATE_PROJECT",
  payload: projectData,
});

export const deleteProject = (projectId: number) => ({
  type: "DELETE_PROJECT",
  payload: { id: projectId },
});
