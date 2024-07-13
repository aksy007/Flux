// Interface for the user information state
export interface UserInfoState {
    userInfo: { [key: string]: object | string } | null;
  }
  
  // Define the initial state with the interface
  const initialState: UserInfoState = {
    userInfo: {},
  };
  
  // Create a reducer function to handle state updates
  export const AppReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "DEMO":
        console.log("Hahaha, Its redux demo!");
        return state;
      default:
        return state;
    }
  };
  