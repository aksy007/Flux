import { ProjectList } from "../pages/Landing/LandingData";

// Interface for the user information state
export interface UserState {
    userInfo: { [key: string]: object | string } | null;
    projects: ProjectList[]
}
  
// Define the initial state with the interface
const initialState: UserState = {
  userInfo: {},
  projects: []
};


// Create a reducer function to handle state updates
export const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_PROJECT_LIST":
      return {...state, projects: [...action.payload]};
    case "ADD_PROJECT":
      const newProject = action.payload;
      newProject.id = state.projects.length + 1;
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "UPDATE_PROJECT":
      const updatedProjects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return {
            ...project,
            ...action.payload,
          };
        }
        return project;
      });
      return {
        ...state,
        projects: updatedProjects,
      };
    case "DELETE_PROJECT":
      const filteredProjects = state.projects.filter(
        (project) => project.id !== action.payload.id   

      );
      return {
        ...state,
        projects: filteredProjects,
      };
    default:
      return state;
  }
};
  