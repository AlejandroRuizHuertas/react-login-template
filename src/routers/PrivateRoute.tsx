import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const PrivateRoute = ({ children }: any) => {

  const { isAuthenticated } = useLogin()
  return isAuthenticated()
    ? children
    : <Navigate to="/" />
}