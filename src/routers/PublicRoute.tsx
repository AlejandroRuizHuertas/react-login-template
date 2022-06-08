import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const PublicRoute = ({ children }: any) => {

  const { isAuthenticated } = useLogin()
  return isAuthenticated()
    ? <Navigate to="/main" />
    : children
}