import { useContext } from "react"
import { AuthContext } from "../modules";
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({ children }) => {

  const {authState} = useContext(AuthContext);
  const {pathname, search} = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (authState.logged) ? children : <Navigate to={'/login'}/>
}
