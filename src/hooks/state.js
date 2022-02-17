import { useSelector } from "react-redux";

// custom hooks to get state stored in redux
export const useIsLoggedIn = () => useSelector(state => state.app.isLogged);